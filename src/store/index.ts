import {createStore} from 'vuex'
import resize from './resize/resize.module'
import cellData from './cellsData/cellsData.module'

type storeType = {
	boardMatrix: {
		columns: number,
		rows: number,
		itemWidth: string,
		itemHeight: string
	},
	currentCellData: string,
	currentCellIndex: string
}

export default createStore({
	state() {
		return {
			boardMatrix: {
				columns: 10,
				rows: 8,
				itemWidth: `100px`,
				itemHeight: `30px`
			},
			currentCellData: '',
			currentCellIndex: ''
		}
	},
	mutations: {
		newActiveCell(state, index) {
			state.currentCellIndex = index
		},
		addValueToActiveCell(state,value){
			state.currentCellData=value
			this.commit('cellData/reWriteCell',{index:state.currentCellIndex,content:state.currentCellData})

		},
		resetCell(state) {
			state.currentCellData = ''
			state.currentCellIndex = ''
		},
		addCellData(state, payload: { content: string, index: string }) {
			state.currentCellData = payload.content
			state.currentCellIndex = payload.index
		},
		dataFromInput(state, payload: { content: string }) {
			state.currentCellData = payload.content
		}
	},
	getters: {
		getBoardMatrix(state: storeType) {
			return state.boardMatrix
		},
		getCurrentIndexCell(store: storeType) {
			return store.currentCellIndex
		},
		getCurrentCellData(state: storeType) {
			return state.currentCellData
		}
	},
	modules: {resize, cellData}
})
