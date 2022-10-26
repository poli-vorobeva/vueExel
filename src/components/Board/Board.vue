<template>
    <div>
        <div class="inputData" >
            <input
                    type="text"
                    :value="inputValue"
                    @input="addToActiveCell"
            />
        </div>
        <top-row :columns="columns"></top-row>
        <board-row
                :isActive="isActiveRow(row)"
                :columns='columns'
                v-for="row in rows"
                :rowInx="row">
        </board-row>
    </div>
</template>
<script>
	import Row from './Row/Row.vue'
	import TopRow from './TopRow/TopRow.vue'
	import {useStore} from "vuex";
	import {ref, computed} from 'vue'

	export default {
		components: {'board-row': Row, 'top-row': TopRow},
		setup() {
			const store = useStore()
			const dataCurrentCell = ref('')
			const {rows, columns} = store.getters.getBoardMatrix
			const inputValue = computed(() => {
				console.log(store.getters.getCurrentCellData,'###')
				return store.getters.getCurrentCellData
			})
			const activeCellIndex = computed(()=>store.getters.getCurrentIndexCell)
			const isActiveRow = computed(() => {
				return function (rowInx) {
					if (+activeCellIndex.value.split('-')[0] === rowInx) {
						return activeCellIndex.value.split('-')[1]
					}
				}
			})
			const addToActiveCell = (e) => {
				store.commit('addValueToActiveCell', e.target.value)

			}
			// const onInputToCell=(e)=>{
			// 	store.commit('dataFromInput',
			//                    {
			//                    	content: e.target.value
			//                    })
			//}
			return {rows, columns, inputValue, dataCurrentCell, isActiveRow, addToActiveCell}
		}
		// emits: ['moveHorizontalHr', 'move-vertical', 'hide-vertical'],
		// setup(_, {emit}) {
		// 	const store = useStore()
		// 	const {rows, columns} = store.getters.getBoardMatrix
		// 	const inputData = ref('')
		// 	const activeRow = ref(null)
		// 	const rowWidth = ref(null)
		// 	const resizedIndex = ref(null)
		// 	const currentActiveCellRow = ref(0)
		// 	const currentActiveCellColumn = ref(0)
		// 	const dataForMultiSelect = ref('')
		// 	const isMultiSelect = ref(false)
		// 	const onListenMove = (data) => {
		// 		dataForMultiSelect.value = data
		// 		isMultiSelect.value = true
		// 	}
		// 	const cellClick = (cellIndex, rowIndex) => {
		// 		currentActiveCellRow.value = rowIndex
		// 		currentActiveCellColumn.value = cellIndex
		// 	}
		// 	const resizeCellX = (width, idx) => {
		// 		resizedIndex.value = idx
		// 		rowWidth.value = width
		// 	}
		// 	const hideVertical = () => emit('hide-vertical')
		// 	const moveVertical = (positionX) => emit('move-vertical', positionX)
		// 	const moveRow = (ind, c) => emit('moveHorizontalHr', c)
		// 	return {
		// 		columns,rows, inputData, activeRow,
		// 		dataForMultiSelect, isMultiSelect, resizedIndex, rowWidth, currentActiveCellColumn, currentActiveCellRow,
		// 		onListenMove, cellClick, resizeCellX, hideVertical, moveVertical, moveRow
		// 	}
		// },
	}
</script>
<style scoped>
    div {
        height: 500px;
        width: 100vw;
        background-color: rgba(255, 0, 0, 0.29);
        display: flex;
        flex-flow: column nowrap;
    }

    .inputData {
        height: 30px;
    }
</style>