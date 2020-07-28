<template>
    <el-row class="container">
        <el-col :sm="10" :md="5">
            {{typeHint}}
        </el-col>
        <el-col :sm="14" :md="7" >
            {{sqlColumn}}
            <el-input v-if="needSplit" v-model="split" placeholder="请填写分隔符" style="width: 30%;margin-left: 20px"/>
        </el-col>
        <el-col :sm="12" :md="6">
            <el-select v-model="csvColumn" @change="columnChange">
                <el-option v-for="column in csvColumns"
                           :key="column"
                           :value="column"
                />
            </el-select>
        </el-col>
        <el-col :sm="12" :md="6">
            {{example}}
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "CsvMatchingSelector",
        props: {
            typeHint: {
                type: String,
                default: '类型提示'
            },
            sqlColumn: {
                type: String,
                default: 'SQL列名'
            },
            csvColumns: {
                type: Array,
                default: function () {
                    return ['none']
                }
            },
            examples: {
                type: Array,
                default: function () {
                    return ['none']
                }
            },
            needSplit: {
                type: Boolean,
                default: false
            }
        },
        computed: {},
        data: function () {
            return {
                csvColumn: 'none',
                example: 'none',
                split: ''
            }
        },
        methods: {
            columnChange() {
                let idx = this.csvColumns.findIndex((n)=>n===this.csvColumn);
                this.example = ''
                for (let i = 0; i < this.examples.length; i++){
                    if (this.examples[i] && this.examples[i][idx] !== ''){
                        this.example = this.examples[i][idx];
                        break;
                    }
                }
            },
            getMapping: function () {
                return {
                    csvColumn: this.csvColumn,
                    split: this.split
                }
            }
        }
    }
</script>

<style scoped>
    .container {

    }
    .el-col{
        height: 30px;
        line-height: 30px;
        text-align:left;
        padding-left: 10px;
    }
</style>
