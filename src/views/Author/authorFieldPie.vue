<template>
    <div style="width:100%; height:1000px">
        <fieldPie></fieldPie>
    </div>

</template>
<style></style>
<script>
    import fieldPie from '@/components/authorPortrait/fieldPie'
    export default {
        components: {
            fieldPie
        },
        data() {
            return {msg: 'vue模板页'}
        }
    }
</script>

