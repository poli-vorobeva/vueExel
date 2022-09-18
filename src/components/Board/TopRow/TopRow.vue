<template>
    <div class="topRow">
        <div class="emptyCell">*</div>
        <top-cell
                @resize-cell-x="resizeCellX"
                @hide-vertical="hideVertical"
                @move-vertical="moveVertical"
                :idx="indx"
                v-for="(r,indx) in rows"
        ></top-cell>
    </div>
</template>
<script>
    import TopCell from './TopCell.vue'
    export default {
    	emits:['move-vertical','hide-vertical'],
    	props:['rows'],
      components:{'top-cell':TopCell},
      methods:{
    		resizeCellX(width,idx){
    			this.$emit('resize-cell-x',width,idx)
            },
				hideVertical(){
					this.$emit('hide-vertical')
                },
				moveVertical(positionX){
					this.$emit('move-vertical',positionX)
    }
      }
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