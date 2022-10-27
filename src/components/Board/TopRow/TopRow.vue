<template>
    <div class="topRow" :style="{height:itemHeight}">
        <div><div class="emptyCell">*</div></div>
        <top-cell
                :style="{width:itemWidth}"
                :idx="i"
                v-for="(r,i) in columns"
        >{{i}}
        </top-cell>
    </div>
</template>
<script>
	import TopCell from './TopCell.vue'
	import {useStore} from "vuex";

	export default {
		props: ['columns'],
		setup(props) {

			const {itemWidth,itemHeight} = useStore().getters.getBoardMatrix
			return {
				columns: props.columns,itemWidth,itemHeight
			}
		},
		// 	emits:['move-vertical','hide-vertical'],
		// 	props:['rows'],
		components: {'top-cell': TopCell},
		//   methods:{
		// 		resizeCellX(width,idx){
		// 			this.$emit('resize-cell-x',width,idx)
		//         },
		// 			hideVertical(){
		// 				this.$emit('hide-vertical')
		//             },
		// 			moveVertical(positionX){
		// 				this.$emit('move-vertical',positionX)
		// }
		//   }
	}
</script>
<style scoped>
    .topRow {
        height: 30px;
        background-color: orange;
        display: flex;
        flex-flow: row nowrap;
    }

    .emptyCell {
        width: 30px;
    }
</style>