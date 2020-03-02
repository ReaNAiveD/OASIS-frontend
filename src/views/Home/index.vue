<template>
    <div id="home"  class="home-box">
        <Header></Header>
        <div class="home-header">
                <div class="note home-header" :style ="note">
                    <div class="search-box">
                        <h1 class="search-title" >-   C   S   E   I   I   I   -</h1>
                    </div>

                    <div class="search-body">
                        <el-input placeholder="请输入作者，出版社，或论文标题" v-model="searchInput" class="input-with-select">
                            <el-select v-model="select" slot="prepend" placeholder="混合搜索" style="width: 110px" >
                                <el-option label="混合搜索" value="0"></el-option>
                                <el-option label="标题" value="1"></el-option>
                                <el-option label="作者" value="2"></el-option>
                                <el-option label="摘要" value="3"></el-option>
<!--                                <el-option label="作者单位" value="4"></el-option>-->
                            </el-select>
                            <el-button slot="append" type="primary" icon="el-icon-search" @click="search"></el-button>
                        </el-input>
                    </div>
                </div>
        </div>
        <div class="home-top-list">
            <div class="top-list">
                <TopList v-bind:authors="topAuthors" ></TopList>
                <TopList  ></TopList>
                <TopList  ></TopList>
            </div>
        </div>

    </div>



</template>

<script>

    import Header from '@/components/Header';
    import TopList from '@/components/TopList';
    import {getAuthorTOPList} from "@/api/home";

    export default {
        name: 'home',
        data() {
            return {
                note: {
                    backgroundImage: "url(" + require("../../assets/home-background.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "2000px ",
                    marginTop: "5px",
                },
                searchInput: '',
                combined:'',
                title:'',
                author:'',
                affiliation:'',
                select: '0',
                topAuthors:[]
            }
        },
        created(){

            this.getTopList();
        },
        methods:{
            search(){
                console.log("search");
                if(this.select==='0'){
                    this.combined=this.searchInput;
                }else if(this.select==='1'){
                    this.title=this.searchInput;
                }else if(this.select==='2'){
                    this.author=this.searchInput;
                }else if(this.select==='3'){
                    this.affiliation=this.searchInput;
                }
                this.$router.push({path: '/search', query: {combined: this.combined,title:this.title,author:this.author,affiliation:this.affiliation}});
            },
            getTopList(){
                getAuthorTOPList(12).then(res=>{
                    this.topAuthors=res.data;
                    console.log(this.topAuthors);
                })
            }
        },
        components: {
            Header,
            TopList
        }
    }
</script>

<style scoped>
    .home-box{
        box-sizing: border-box;
    }
.home-header{
    position:absolute;
    width:100%;
    height:600px;
    background-size: cover;

}
.search-box{
    font-size: 50px;
}
.search-title{
    margin-top: 150px;
    margin-bottom: 70px;
    width: 100%;
    font-size: 64px;
    color: #fff;
    font-weight: 600;
    text-align: center;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 100%
}
.search-body{
    position: relative;
    margin: 0 auto;
    width: 50%;
    height: 56px;
}
.home-top-list {
    position: relative;
    margin-top: 500px;
    left: 0px;
    width: 100%;
    height: 500px;
    justify-content: space-between;
    height: 500px;
    background: #f7f8fa;
}
    .top-list{
        z-index: 2;
        position: absolute;
        /*top: -80px;*/
        left: 50%;
        width: 90%;
        -webkit-transform: translate(-50%);
        /*transform: translate(-50%);*/
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }


</style>

