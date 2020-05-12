<template>
    <div class="main-container">
        <SearchHeader/>

        <!--        面包屑-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item>数据整合</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="enrich-container">
            <file-selector class="file-selector" v-on:fileChanged="fileChosen"/>
        </div>
    </div>
</template>
<script>
    import SearchHeader from "@/components/SearchHeader/index";
    import FileSelector from "@/components/FileSelector/index";
    import Papa from 'papaparse'
    export default {
        name: "index",
        components: {FileSelector, SearchHeader},
        data: function () {
            return{
                content: ""
            }
        },
        methods: {
            fileChosen: function (file) {
                console.log("file chosen")
                let reader = new FileReader();
                reader.onload = function () {
                    if (reader.result){
                        this.content = reader.result;
                        console.log(reader.result)
                    }
                }
                reader.readAsText(file);
                Papa.parse(file, {
                    delimiter: "",	// auto-detect
                    newline: "",	// auto-detect
                    quoteChar: '"',
                    escapeChar: '"',
                    header: false,
                    transformHeader: undefined,
                    dynamicTyping: false,
                    preview: 0,
                    encoding: "",
                    worker: false,
                    comments: false,
                    step: undefined,
                    complete: function (result) {
                        console.log(result)
                    },
                    error: undefined,
                    download: false,
                    downloadRequestHeaders: undefined,
                    downloadRequestBody: undefined,
                    skipEmptyLines: false,
                    chunk: undefined,
                    fastMode: undefined,
                    beforeFirstChunk: undefined,
                    withCredentials: undefined,
                    transform: undefined,
                    delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
                })
            }
        }
    }
</script>

<style scoped>
    .enrich-container{
        padding-top: 120px;
    }
</style>
