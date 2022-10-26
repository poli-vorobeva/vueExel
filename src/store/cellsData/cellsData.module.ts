type stateType={
	data:Map<string,Record<string, string>>
}
export default {
	namespaced: true,
	state() {
		return{
			data:new Map()
		}
	},
	mutations: {
		reWriteCell(state:stateType,payload:
			{index:string,
				content:string,
				expression:string
			}){
			if(!payload.content){
				state.data.delete(payload.index)
				return
			}
			state.data.set(payload.index,
				{data:payload.content,formula:payload.expression})
		}
	},
	getters: {
		getCellData:(state)=>(index)=>{
			return state.data.has(index) ? state.data.get(index):''
		},
		getSet(state){
			return state.data
		}
	}
}