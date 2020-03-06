<template>
    <div class="list-container">
        <reference-list-item class="item" v-for="(ref, index) in refs" :key="index" :title="ref.title || ''" :text="ref.text || ''"
                             :google-link="ref.googleLink || ''" :document-id="ref.documentId || -1"></reference-list-item>
    </div>
</template>

<script>
    import ReferenceListItem from "@/components/ReferenceList/ReferenceListItem";
    export default {
        name: "ReferenceList",
        components: {ReferenceListItem},
        props: {
            refs: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .list-container {
        margin: 12px;
    }

    .list-container .detail-label{
        font-size: 18px;
        text-align: left;
        margin-bottom: 16px;
    }

    .list-container .item{
        margin-bottom: 8px;
    }
</style>
