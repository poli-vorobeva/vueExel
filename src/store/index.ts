import {createStore,createLogger} from 'vuex'
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
const plugins = []
if (process.env.NODE_ENV === 'development') {
	plugins.push(createLogger())
}
export default createStore({
	plugins,
	state() {
		return {
			boardMatrix: {
				columns: 20,
				rows: 30,
				itemWidth: `100px`,
				itemHeight: `30px`,
			},
			currentCellData: '',
			currentCellIndex: '1-1'
		}
	},
	mutations: {
		onActiveCell(state, index) {
			if(state.currentCellIndex===index)return
			state.currentCellIndex = index
			state.currentCellData=this.getters['cellData/getCellData'](index).data
		},
		addValueToActiveCell(state,value){
			state.currentCellData=value
		},
	},
	getters: {
		getBoardWidth:(state:storeType)=>{
			return state.boardMatrix.columns*parseInt(state.boardMatrix.itemWidth)
		},
		getBoardMatrix:(state: storeType)=>state.boardMatrix,
		getCurrentIndexCell:(state: storeType)=> state.currentCellIndex,
		getCurrentCellData:(state: storeType)=> state.currentCellData
	},
	modules: {resize, cellData}
})
