FROM node:15 as build-stage
RUN npm config set registry https://registry.npm.taobao.org
RUN npm config get registry
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
#COPY /cert /etc/nginx/cert

#尝试使用通过jenkins构建的dist，未成功
#FROM nginx
#RUN mkdir /app
#COPY /dist /app
#COPY nginx.conf /etc/nginx/nginx.conf
