<template>
    <div class="filter-by-container">
        <div class="one-line">
            <div>Filter By</div>
<!--            <el-link type="info">过滤</el-link>-->
            <el-link icon="el-icon-search">过滤</el-link>
        </div>
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

    .one-line {
        display: flex;
        height: 35px;
        justify-content: space-between;
    }

    .one-line .el-link {
        /*height: 25px;*/

    }
</style>
