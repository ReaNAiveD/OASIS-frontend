<template>
    <DocumentList></DocumentList>
</template>

<script>
  import DocumentList from '@/components/DocumentList'
  // import {get_field_document} from '@/api/field'

  export default {
    name: 'DocumentList',
    components:{
      DocumentList
    },
    data(){
      return{
        pageSize:5,
        page:1,

      }
    },
    created(){
      // get_field_document(this.$route.params.id,this.pageSize,this.page).then(res=>{
      //   console.log(res.data.data)
      // })
    }
  }
</script>

<style scoped>

</style>
