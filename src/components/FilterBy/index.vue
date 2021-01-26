<template>
  <div class="filter_container">
    <FilterByYear @changeYear="changeYear"></FilterByYear>
    <FilterByPublicationType @changePublishType="changePublishType"></FilterByPublicationType>
  </div>
</template>

<script>
import FilterByYear from "@/components/FilterBy/FilterByYear"
import FilterByPublicationType from "@/components/FilterBy/FilterByPublicationType"

export default {
  name: "index",
  components:{
    FilterByYear,
    FilterByPublicationType
  },
  methods: {
    changeYear(startYear, endYear) {
      this.$emit("changeYear",startYear,endYear)
    },
    changePublishType(checkList){
      this.$emit("changePublishType",checkList)
    }
  },
}
</script>

<style scoped>

</style>