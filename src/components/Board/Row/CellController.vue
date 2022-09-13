<template>
    <div class='cell'>
        <div class="cellContent"></div>
        <div class="resizeSubDivRight"></div>
        <div class="resizeSubDivBottom"> </div>
        <div class="multiResize"></div>
    </div>
</template>
<style>
    .cell {
        border: 1px solid red;
        width: 100px;
        outline: none;
        position: relative;
    }
    .resizeSubDivRight {
        width: 5px;
        height: 95%;
        position: absolute;
        top: 0;
        right: 0;
    }
    .resizeSubDivBottom{
        height: 5px;
        width: 95%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .multiResize{
        height: 5px;
        width: 5px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .multiResize:hover{
        background: aquamarine;
        cursor: move;
    }
    .resizeSubDivBottom:hover{
        background: olive;
        cursor: row-resize;
    }
    .resizeSubDivRight:hover{
        background: firebrick;
        cursor: col-resize;
    }
    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }
</style>