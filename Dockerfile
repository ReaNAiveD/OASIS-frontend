FROM node:12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

#尝试使用通过jenkins构建的dist，未成功
#FROM nginx
#RUN mkdir /app
#COPY /dist /app
#COPY nginx.conf /etc/nginx/nginx.conf