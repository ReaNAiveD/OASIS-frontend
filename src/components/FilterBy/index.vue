<template>
  <div class="filter_container">
    <FilterByYear :start-year="startYear" :end-year="endYear"></FilterByYear>
    <FilterByPublicationType :check-list="checkList"></FilterByPublicationType>
  </div>
</template>

<script>
import FilterByYear from "@/components/FilterBy/FilterByYear"
import FilterByPublicationType from "@/components/FilterBy/FilterByPublicationType"

export default {
  name: "index",
  props:{
    startYear:{
      type:Number,
      default:1970
    },
    endYear:{
      type:Number,
      default: 2020
    },
    checkList:{
      type:Array,
      default:()=>["ASE","ICSE"]
    }
  },
  components:{
    FilterByYear,
    FilterByPublicationType
  }
}
</script>

<style scoped>

</style>