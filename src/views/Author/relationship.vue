<template>
<!--    <div class="echartLayout">-->
<!--        <div id="container" style="width:100%; height:100%; overflow:hidden;"></div>-->
<!--    </div>-->
    <div style="width:100%; height:1000px">
        <authorRelation ></authorRelation>
    </div>

</template>

<script>
    import authorRelation from '@/components/authorPortrait/authorRelationShip'
    import {authorRelation as getAuthorRelation} from  '@/api/author'

    export default {

        data() {
            return {
                relationData:{}
            }
        },
        created(){
            console.log(this.$route.params.id);
        },
        components:{
            authorRelation
        },
        mounted() {
            this.initEchart()
        },
        methods: {
            initEchart(){
                getAuthorRelation(this.$route.params.id).then(response=>{
                    // console.log(response);
                    this.relationData=response.data;
                }).catch(error=>{
                    console.log(error)
                });
            }
        }
    }
</script>

<style scoped>

</style>