<template>
    <div class="main-container">
        <div class="file-inplace" :v-if="filename!=='' && filename!=null">
            {{filename}}
        </div>
        <div class="select-button">
            <el-button @click="selectFileDisplayButtonClicked">
                {{(filename===''||filename==null)?"上传csv文件":"更换csv文件"}}
            </el-button>
            <input id="select-input" style="display: none" type="file" accept=".csv,.txt" @change="selectFile()">
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileSelector",
        data: function(){
            return {
                filename : ""
            }
        },
        computed: {
        },
        methods: {
            selectFileDisplayButtonClicked: function(){
                let selectInput = document.getElementById("select-input");
                selectInput.click();
            },
            selectFile: function () {
                let selectInput = document.getElementById("select-input");
                this.filename = selectInput.files[0].name;
                this.$emit("fileChanged", selectInput.files[0]);
            }
        }
    }
</script>

<style scoped>

</style>
