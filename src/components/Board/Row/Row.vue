<template>
    <div class="col">
        <div class="rowIndex">1</div>
        <cell-controller v-for="r in rows"></cell-controller>
    </div>
</template>
<script>
    import CellController from './CellController.vue'
    export default{
    	props:['rows'],
      components:{'cell-controller':CellController}
    }
</script>
<style scoped>
    .col{
        display: flex;
        flex-flow: row nowrap;
    }
.rowIndex{
    width: 30px;
}
</style>