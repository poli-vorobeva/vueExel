<template>
    <div :class="'row'" :style="{height:itemHeight}">
        <div v-for="(c,i) in columns">

            <index-cell :rowIndex="rowInx" :colIndex="i" v-if="i===0">{{rowInx}}</index-cell>
            <cell-controller :isActiveCell='isActiveCell(i)' :v-model=dataCur :rowIndex="rowInx" :colIndex="i"
                             v-else></cell-controller>
        </div>
    </div>
</template>
<script>
	import IndexCell from './IndexCell.vue'
	import CellController from './CellController.vue'
	import {ref, computed} from 'vue'
	import {useStore} from "vuex";

	export default {
		//если ячейка активная, то передаем ей значение
		props: ['columns', 'rowInx', 'dataCurrentCell', 'isActive'],
		components: {'cell-controller': CellController, 'index-cell': IndexCell},
		setup({columns, rowInx, dataCurrentCell, isActive},) {
			//const curCell = ref('currentCell')
			const store = useStore()
			const {itemHeight} = store.getters.getBoardMatrix
			const isActiveCell = computed(() => {
				return function (ind) {
					if (isActive) {
						return ind === +isActive
					}
					return false
				}

			})
			const dataCur = ref(dataCurrentCell)
			return {
				itemHeight, dataCur, isActiveCell,
				columns, rowInx,
			}
		},

		//	emit: ['onListenMove'],
		// 	data() {
		// 		return {
		// 			refName: 'row' + this.indx,
		// 			dataForSpread: '',
		//          // isMultiSelect:false
		// 		}
		// 	},
		// 	emits: ['moveHorizontalHr', 'cellClick','onInput'],
		// 	props: ['rows', 'indx', 'resizedIndex', 'resizedWidth', 'currentActiveCellColumn',
		// 		'currentActiveCellRow', 'dataForMultiSelect', 'isMultiSelect'],

		// 	updated() {
		// 		if (this.isMultiSelect) {
		//
		// 		}
		// 	},
		// 	methods: {
		// 		onInput(data){
		// 			this.$emit('onInput',data)
		//         },
		// 		listenMouseMove(data) {
		// 			this.$emit('onListenMove', data)
		// 		},
		// 		clickCell(cellIndex) {
		// 			this.$emit('cellClick', cellIndex, this.indx)
		// 		},
		// 		stopMoveLine(data) {
		// 			const y = this.$refs[this.refName].getBoundingClientRect().y
		// 			const newPosition = data - y
		// 			this.$refs[this.refName].style.height = `${newPosition}px`
		// 			//this.$emit('stopMoveHr')
		// 		},
		// 		moveLine(data) {
		// 			const y = this.$refs[this.refName].getBoundingClientRect().y
		// 			this.$emit('moveHorizontalHr', data)
		// 		}
		// 	},
		// 	computed: {
		// 		cellKey() {
		// 			return function (row, cell) {return `cell${row}${cell}`}
		// 		}
		// 	}
	}
</script>
<style scoped>

    .row {
        height: 50px;
        display: flex;
        flex-flow: row nowrap;
        position: relative;
    }

    /*.moveLine:after {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    bottom:var(--posit);*/
    /*    border-bottom: 5px dashed blue;*/
    /*    width: 100%;*/
    /*    height: 5px;*/
    /*}*/

    .rowIndex {
        width: 30px;
        position: relative;
    }
</style>