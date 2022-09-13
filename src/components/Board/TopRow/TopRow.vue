<template>
    <div class="topCol">
        <div class="emptyCell">*</div>
        <div class='topCell' v-for="r in rows">ll</div>
    </div>
</template>
<script>
    export default {
    	props:['rows']
    }
</script>
<style scoped>
    .topCol{
        height: 30px;
        background-color: orange;
        display: flex;
        flex-flow: row nowrap;
    }
    .topCell{
        width: 100px;
        height: 30px;
        border: 1px solid olivedrab;
    }
    .emptyCell{
        width: 30px;
    }
</style>