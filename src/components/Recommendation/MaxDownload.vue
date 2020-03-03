<template>
    <div class="max-download-container" v-if="documents.length!==0">
        <div>The Most Popular Papers (Top 3)</div>
        <div class="list-container">
            <div  v-for="document in documents" :key="document.id" >
                <div class="triangle-topleft-blue"></div>
                <div class="triangle-topleft-white"></div>
                <DocumentListItem :title="document.title"
                                  :id="document.id"
                                  :authors="document.authors" :docu-abstract="document.docuAbstract"
                                  :publication-year="document.publicationYear" :keywords="document.keywords.split(';')"
                                  :reference-count="document.referenceCount"
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
        height: 35px;
        line-height: 35px;
        color: darkgray;
        font-size: 15px;
    }

    .triangle-topleft-blue {
        width: 0;
        height: 0;
        border-top: 35px solid #3588f5;
        border-right: 35px solid transparent;
        /*border-top: 25px solid white;*/
        /*border-right: 25px solid white;*/
        position: absolute;
    }

    .triangle-topleft-white {
        width: 0;
        height: 0;
        border-top: 20px solid white;
        border-right: 20px solid transparent;
        /*border-top: 25px solid white;*/
        /*border-right: 25px solid white;*/
        position: absolute;
    }
</style>
