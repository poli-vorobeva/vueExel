<template>
<app-header></app-header>
  <tool-bar></tool-bar>
  <app-board></app-board>
</template>
<script>
  import Header from './components/Header.vue'
  import ToolBar from './components/ToolBar/ToolBar.vue'
  import Board from './components/Board/Board.vue'
  export default {

    components:{'app-header':Header,'tool-bar':ToolBar,'app-board':Board}
  }

</script>
<style scoped>
  *{
    margin: 0;
    box-sizing: border-box;
  }
</style>
