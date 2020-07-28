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
        <el-divider >上传文件后请将csv文件对应正确的列名</el-divider>
        <div style="margin: 30px">
            <el-row>
                <el-col :sm="10" :md="5">
                    中文名
                </el-col>
                <el-col :sm="14" :md="7" >
                    标准列名
                </el-col>
                <el-col :sm="12" :md="6" >
                    csv文件各列名
                </el-col>
                <el-col :sm="12" :md="6" >
                    实例
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <div :key="info_piece[1]" v-for="info_piece in info_need" >
                <CsvMatchingSelector :ref="info_piece[1]" :type-hint="info_piece[0]" :sql-column="info_piece[1]" :csv-columns="lines[0]"
                                     :examples="lines.slice(1)" :need-split="info_piece[2]"/>
                <el-divider></el-divider>
            </div>
        </div>


        <div class="submit">
            <el-button type="primary" @click="submitEvent">提交</el-button>
        </div>
    </div>
</template>
<script>
    import SearchHeader from "@/components/SearchHeader/index";
    import FileSelector from "@/components/FileSelector/index";
    import Papa from 'papaparse'
    import CsvMatchingSelector from "@/views/DocumentEnrich/components/CsvMatchingSelector";
    import { submitEnrichData } from "@/api/enrich";
    export default {
        name: "index",
        components: {CsvMatchingSelector, FileSelector, SearchHeader},
        data: function () {
            return{
                file: null,
                content: [],
                lines: [[], []],
                info_need: [
                    ['标题', 'title', false],
                    ['作者姓名', 'author.name', true],
                    ['作者机构', 'author.author_affiliation', true],
                    ['发布期刊/会议', 'publication_title', false],
                    ['发布年份', 'publication_year', false],
                    ['卷号', 'volume', false],
                    ['起始页', 'start_page', false],
                    ['终止页', 'end_page', false],
                    ['摘要', 'abstract', false],
                    ['DOI', 'doi', false],
                    ['PDF文档链接', 'pdf_link', false],
                    ['关键词', 'keywords', true],
                    ['发布机构', 'publisher', false],
                    ['文档发布标识符', 'document_identifier', false],
                    ['总下载量', 'total_download', false],
                    ['总被引量', 'total_citations', false]
                ]
            }
        },
        methods: {
            fileChosen: function (file) {
                this.file = file;
                let reader = new FileReader();
                let enricher = this;
                reader.onload = function () {
                    if (reader.result){
                        // this.content = reader.result;
                        console.log(reader.result)
                    }
                }
                reader.readAsText(file);
                let refreshLine = function (result) {
                    enricher.lines = result.data.slice(0, 10)
                    enricher.content = result.data;
                }
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
                        // this.lines = result.data.slice(0, 2)
                        refreshLine(result)
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
            },
            getMappings() {
                let result = {};
                for (let i = 0; i < this.info_need.length; i++){
                    let info_piece = this.info_need[i];
                    // console.log(this.$refs[info_piece[1]][0].getMapping())
                    result[info_piece[1]] = this.$refs[info_piece[1]][0].getMapping();
                }
                return result;
            },
            submitEvent() {
                if(!this.file){
                    this.$notify.error({
                        title: '错误',
                        message: '请先上传文件'
                    });
                }else{
                    // console.log(this.getMappings());
                    let data = new FormData();
                    data.append("file", this.file);
                    data.append("mapping", new Blob([JSON.stringify(this.getMappings())], {type: "application/json"}));
                    submitEnrichData(data).then(res=>{
                         console.log(res)
                        if(res.status==200){
                            this.$notify({
                                title: '成功',
                                message: '提交成功',
                                type: 'success'
                            });
                        }
                    }).catch(err=>{
                        console.log(err)
                        this.$notify.error({
                            title: '错误',
                            message: err
                        });
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .enrich-container{
        padding-top: 120px;
        padding-bottom: 16px;
    }
    .el-breadcrumb {
        width: 100%;
        z-index: 998;
        padding-top: 80px;
        padding-bottom: 10px;
        padding-left: 40px;
        background: white;
        position: fixed;
        border-bottom: 2px solid #3588f5;
    }

    .el-breadcrumb-item:first-child {
    }

    .submit{
        padding: 16px;
    }
    .el-col{
        height: 30px;
        line-height: 30px;
        text-align:left;
        padding-left: 10px;
        font-weight: bold;
    }
</style>
