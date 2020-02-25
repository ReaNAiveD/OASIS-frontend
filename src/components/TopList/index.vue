<template>
    <div class="top-item box">
        <div class="top-name">
            <div class="top-name-title">
                <strong>Top Author</strong>
                <div style="width: 100% ;font-size: 16px;margin-top: 4px">view more</div>

            </div>
        </div>
        <div class="top-list">
            <ul>
                <li  v-for="(author, index) in authors" :key="index">
                    <div class="item-top">
                        <a class="left" :href="'/authorDetail/'+author.id" target="_blank">
                            {{author.name}}
                        </a>
                        <div class="right">
                            {{author.document_count}}
                            <span>Papers</span>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="el-progress el-progress--line el-progress--without-text" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="el-progress-bar">
                                <div class="el-progress-bar__outer" style="height: 6px;">
                                    <div class="el-progress-bar__inner" :style="'width:'+author.document_count/authors[0].document_count*100+'%'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopList',
        data() {
            return {
                authors: [
                    {
                        "name": "John Penix0",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "255"
                    },
                    {
                        "name": "John Penix1",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "225"
                    },
                    {
                        "name": "John Penix2",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "165"
                    },
                    {
                        "name": "John Penix3",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "145"
                    },
                    {
                        "name": "John Penix4",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "105"
                    },
                    {
                        "name": "John Penix4",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "85"
                    },
                    {
                        "name": "John Penix5",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "65"
                    },
                    {
                        "name": "John Penix6",
                        "affiliation": "Google, USA",
                        "id": "123456789",
                        "keywords": "",
                        "document_count": "55"
                    },
                    ]
            };
        },
        methods: {

        },
        computed:{
        }

    }
</script>

<style scoped>
    .box {
        box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
        border-radius: 4px;
        background: #fff;
    }

    .top-name{
    /*width: 75%;*/
    width: 100%;
    height: 80px;
    /*height: 100%;*/
    font-size: 18px;
    background: rgba(20, 98, 138, 0.76);
    display: flex;
    -webkit-box-pack: justify;
    /*-webkit-box-pack: start;*/
    justify-content: space-between;
    justify-content: flex-start;
    /*-webkit-box-align: center;*/
    /*align-items: center;*/
    /*color: #20283e;*/
}
.top-name-title{
    /*padding-left: 15px;*/
    margin: 10% auto;
    width: 80%;
    color: white;
    /*box-sizing: border-box;*/
}
.top-list {
        width: 100%;
        padding: 10px 30px 20px;
        box-sizing: border-box;
    }

.top-item{
    margin: 0 10px;
    max-width: 520px;
    width: 24%;
}
.item-top {
    width: 100%;
    height: 20px;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 15px;
}
.left {
    width: 60%;
    color: #83a7cf;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.right {
    width: 40%;
    text-align: right;
    color: #777;
    width: 50% !important;
    font-size: 10px !important;
}
.item-bottom {
    margin-top: 3px;
    width: 100%;
    height: 4px;
}
.el-progress {
    position: relative;
    line-height: 1;
}
.top-list ul {
        width: 100%;
        height: 375px;
        overflow: hidden;
    padding: 0;
    margin-top: -5px;
    }


</style>
