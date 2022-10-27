<template>
    <div class="toolPanel">
        <div class="toolOperators">
            <div>mul</div>
            <div>dev</div>
            <div>dec</div>
            <div>inc</div>
        </div>
        <div class="toolTextAlign">
            <div>left</div>
            <div>right</div>
            <div>center</div>
            <div>streight</div>
        </div>
    </div>
</template>
<style scoped>
    .toolPanel{
        display: flex;
        justify-content: space-evenly;
        height: 30px;
        border-bottom: 1px solid gray;
        box-shadow: 0 2px 19px -5px grey;;
    }
    .toolOperators,.toolTextAlign{
        display: flex;
        align-items: center;
    }
    .toolOperators div,.toolTextAlign div{
        border: 1px solid gray;
    }
</style>