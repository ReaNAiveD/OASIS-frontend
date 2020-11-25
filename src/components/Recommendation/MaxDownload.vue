<template>
    <div class="max-download-container" v-if="documents.length!==0">
        <div>The Most Popular Papers (Top 3)</div>
        <div class="list-container">
            <div  v-for="document in documents" :key="document.id" >
                <div class="triangle-top-left"></div>
                <DocumentListItem :title="document.title"
                                  :id="document.id"
                                  :authors="document.authors" :docu-abstract="document.docuAbstract"
                                  :publication-year="document.publicationYear" :keywords="document.keywords.split(';')"
                                  :reference-count="document.referenceCount"
                                  :keyword-limit="3"
                                  />
            </div>
        </div>
    </div>
</template>

<script>
  import DocumentListItem from '@/components/DocumentList/DocumentListItem'

  export default {
    name: 'MaxDownload',
    components: { DocumentListItem },
    data () {
      return {
        num: 3,
        documents: []
      }
    },
    created () {
      this.$api.getMaxDownload(this.num).then(res => {
        this.documents = res.data
        console.log(res.data)
      }, err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
    .max-download-container > div:first-child {
      text-align: left;
        height: 35px;
        line-height: 35px;
        color: darkgray;
        font-size: 15px;
    }

    .triangle-top-left{
        border-bottom: 9px solid #3588f5;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        width: 30px;
        transform: rotate(315deg) translateX(-14px);
        position: absolute;
    }
</style>
