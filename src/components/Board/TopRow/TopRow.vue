<template>
    <div class="topRow">
        <div class="emptyCell">*</div>
        <top-cell v-for="r in rows"></top-cell>
    </div>
</template>
<script>
    import TopCell from './TopCell.vue'
    export default {
    	props:['rows'],
      components:{'top-cell':TopCell}
    }
</script>
<style scoped>
    .topRow{
        height: 30px;
        background-color: orange;
        display: flex;
        flex-flow: row nowrap;
    }
    .emptyCell{
        width: 30px;
    }
</style>