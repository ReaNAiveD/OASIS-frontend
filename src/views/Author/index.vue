<template>
    <el-row :gutter="16">
        <el-col :md="6" :sm="24">
            <el-card>
                <AuthorInfo :info="authorDetail"/>
            </el-card>
        </el-col>
        <el-col :md="18" :sm="24">
            <DocumentList/>
        </el-col>
    </el-row>
</template>

<script>
    import AuthorInfo from "@/components/AuthorInfo";
    import DocumentList from "@/components/DocumentList/index";
    import { detail as getAuthorDetail } from '@/api/author';
    export default {
        name: "index",
        components: {DocumentList, AuthorInfo},
        data: function () {
            return {
                authorDetail: {
                    "id":10448,
                    "name":"",
                    "firstName":"",
                    "lastName":"",
                    "affiliation":"",
                    "authorKeywords":"",
                    "ieeeId":"",
                    "coworkers":[],
                    "documentCount":0,
                    "documents": []
                }
            }
        },
        created: function () {
            console.log(this.$route.params.id);
            getAuthorDetail(this.$route.params.id).then(response => {
                console.log(response);
                this.authorDetail = response.data;
            }).catch(error =>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
</style>
