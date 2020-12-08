<template>
    <div class="aff-all-container">
        <search-header/>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/'}">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item>Affiliation</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="aff-all-list">
            <el-table
                :data="affiliations"
                class="aff-all-table"
                :default-sort="{prop: 'activation', order: 'descending'}"
                @sort-change="sortTable"
                >
                <el-table-column
                    prop = "name"
                    label = "机构"
                    sortable="custom"
                    min-width="240"
                    >
                    <template slot-scope="scope">
                        <el-link :href="'/aff/'+scope.row.affiliationId">{{scope.row.name}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="authorCount"
                    label="作者数"
                    sortable
                    width="160"
                    />
                <el-table-column
                    prop="docCount"
                    label="论文数"
                    sortable
                    width="160"
                    />
                <el-table-column
                    prop="citationCount"
                    label="总被引用数"
                    width="160"
                    />
                <el-table-column
                    prop="activation"
                    label="活跃度"
                    sortable
                    width="160"
                    />
            </el-table>
            <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                @current-change="changePage"
                />
        </div>
    </div>
</template>

<script>
import SearchHeader from "@/components/SearchHeader/index";
import {getAll} from "@/api/affiliation"
export default {
    name: "index",
    components: {SearchHeader},
    data: function (){
        return {
            affiliations: [],
            page: 0,
            total: 1,
            pageSize: 15,
            orderProp: "activation",
            order: "descent"
        }
    },
    methods: {
        sortTable: function ({ column, prop, order }) {
            console.log(column, prop, order)
            if (order) {
                if (order === "descending"){
                    this.order = "descent"
                }
                else {
                    this.order = "ascent"
                }
                this.orderProp = prop
                // this.page = 0
            }
            else {
                this.order = "descent"
                // this.page = 0
                this.orderProp = "activation"
            }
            getAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
                this.affiliations = res.data.content
                this.total = res.data.totalElements
            })
        },
        changePage: function (currentPage){
            console.log(currentPage)
            this.page = currentPage - 1
            getAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
                this.affiliations = res.data.content
                this.total = res.data.totalElements
            })
        }
    },
    created() {
        getAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
            this.affiliations = res.data.content
            this.total = res.data.totalElements
        })
    }
}
</script>

<style scoped>
    .aff-all-list {
        padding-top: 150px;
        padding-bottom: 50px;
        position: relative;
        max-width: 1280px;
        margin: auto;
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
</style>
