<template>
    <div class="filter-by-container">
        <FilterByYear></FilterByYear>
        <FilterByPublicationType></FilterByPublicationType>
    </div>
</template>

<script>
  import FilterByYear from '@/components/FilterBy/FilterByYear'
  import FilterByPublicationType from '@/components/FilterBy/FilterByPublicationType'
  export default {
    name: 'index',
    components:{
      FilterByYear,
      FilterByPublicationType
    }
  }
</script>

<style scoped>

</style>
