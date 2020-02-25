<template>
    <div class="filter-by-container">
        <div>Filter By</div>
        <FilterByYear></FilterByYear>
        <FilterByPublicationType></FilterByPublicationType>
    </div>
</template>

<script>
  import FilterByYear from '@/components/FilterBy/FilterByYear'
  import FilterByPublicationType from '@/components/FilterBy/FilterByPublicationType'

  export default {
    name: 'index',
    components: {
      FilterByYear,
      FilterByPublicationType
    },
  }
</script>

<style scoped>
    .filter-by-container div:first-child{
        height: 35px;
        line-height: 35px;
        color: darkgray;
        font-size: 15px;
    }
</style>
