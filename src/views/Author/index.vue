<template>
    <el-row>
        <el-col :md="6" :sm="24">
            <AuthorInfo/>
        </el-col>
        <el-col :md="18" :sm="24">
            <DocumentList/>
        </el-col>
    </el-row>
</template>

<script>
    import AuthorInfo from "@/components/AuthorInfo";
    import DocumentList from "@/components/DocumentList/index";
    export default {
        name: "index",
        components: {DocumentList, AuthorInfo}
    }
</script>

<style scoped>

</style>
