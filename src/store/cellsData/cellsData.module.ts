type stateType={
	data:Map<string,string>
}
export default {
	namespaced: true,
	state() {
		return{
			data:new Map()
		}
	},
	mutations: {
		reWriteCell(state:stateType,payload:{index:string,content:string}){
			if(!payload.content){
				state.data.delete(payload.index)
				return
			}
			state.data.set(payload.index,payload.content)
		}
	},
	getters: {
		getCellData:(state)=>(index)=>{
			return state.data.has(index) ? state.data.get(index):''
		}
	}
}