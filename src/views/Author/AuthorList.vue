<template>
    <div class="author-all-container">
        <search-header/>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/'}">OASIS</el-breadcrumb-item>
            <el-breadcrumb-item>Author</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="author-all-list">
            <el-table
                :data="authors"
                class="author-all-table"
                :default-sort="{prop: 'activation', order: 'descending'}"
                @sort-change="sortTable"
                >
                <el-table-column
                    prop="name"
                    label="学者"
                    sortable
                    min-width="240"
                    >
                    <template slot-scope="scope">
                        <el-link :href="'/author/'+scope.row.authorId">{{scope.row.name}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="affiliation"
                    label="机构"
                    min-width="240"
                    />
                <el-table-column
                    prop="documentCount"
                    label="文章数"
                    sortable
                    width="160"
                    />
                <el-table-column
                    prop="activation"
                    label="活跃度"
                    sortable
                    width="160"
                    :formatter="activationFormatter"
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
import {authorAll} from "@/api/author";

export default {
    name: "AuthorList",
    components: {SearchHeader},
    data: function (){
        return {
            authors: [],
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
            authorAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
                this.authors = res.data.content
                this.total = res.data.totalElements
            })
        },
        changePage: function (currentPage){
            console.log(currentPage)
            this.page = currentPage - 1
            authorAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
                this.authors = res.data.content
                this.total = res.data.totalElements
            })
        },
        activationFormatter(row) {
            return row.activation.toFixed(2)
        }
    },
    created() {
        authorAll(this.order, this.orderProp, this.page, this.pageSize).then(res => {
            this.authors = res.data.content
            this.total = res.data.totalElements
            console.log(this.authors)
        })
    }
}
</script>

<style scoped>
.author-all-list {
    padding-top: 100px;
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
.author-all-table{
    padding: 32px;
}

</style>
