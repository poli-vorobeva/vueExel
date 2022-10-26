<template>
    <div
            @click="onFocus"
            class='cell'
            :style="{width:defaultCellWidth}">
        <div class="cellContent">
            <input v-if="isFocus"
                   autofocus
                   @input="onInput"
                   :style="{width: cellWidth}"
                   type="text"
                   @change="onChange"
                   :value="inputValue"
            />
            <span v-else>{{inputValue}}</span>
        </div>
    </div>
</template>
<script>
	import {useStore} from "vuex";
	import {ref, computed} from 'vue'

	export default {
		props: ['colIndex', 'rowIndex', 'isActiveCell'],
		setup({rowIndex, colIndex, isActiveCell}) {
			const store = useStore()
			const cellIndex = `${rowIndex}-${colIndex}`
			const defaultCellWidth = store.getters.getBoardMatrix.itemWidth
			const cellWidth = ref(defaultCellWidth)
			const inputValue = computed(() => {
				const activeCell = store.getters.getCurrentIndexCell
				if (activeCell == cellIndex) {
					return store.getters.getCurrentCellData
				}
				else {
					console.log(store.getters['cellData/getCellData'](cellIndex))
					return store.getters['cellData/getCellData'](cellIndex)
				}

			})
			// const cellData = computed(() => {
			// 	const activeCell = ref(store.getters.getCurrentIndexCell)
			// 	//console.log(activeCell.value, 'activeCellIndex')
			//
			// 	if (isActiveCell) {
			// 		return store.getters.getCurrentCellData
			// 	}
			// 	else {
			// 		//console.log(store.getters['cellData/getCellData'](cellIndex))
			// 		return store.getters['cellData/getCellData'](cellIndex)
			// 	}
			// })
			const isFocus = ref(false)
			const onFocus = () => {
				store.commit('onActiveCell', cellIndex)
				isFocus.value = true
			}
			const onInput = (e) => {
				store.commit('addValueToActiveCell', e.target.value)
				if (e.target.value.length > 10) {
					cellWidth.value = parseInt(cellWidth.value, 10) + 10 + 'px'
				}
				else {
					cellWidth.value = defaultCellWidth
				}
			}
			const onChange = (e) => {
				console.log('onChange')
				store.commit('cellData/reWriteCell',
                             {index: cellIndex, content: inputValue.value})
			}

			return {
				cellWidth, defaultCellWidth, isFocus, inputValue,
				onInput, onFocus, onChange
			}
		}
	}
</script>
<style>
    .cell {
        border: 1px solid red;
        outline: none;
        position: relative;
        width: 50px;
        height: 100%;
    }

    input {
        position: absolute;
        z-index: 20;
        background: none;
        border: none;
        outline: none;
    }

    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }

</style>


<!--<template>-->
<!--    <div class='cell' :style="{width:cellWidth}">-->
<!--        <div-->
<!--                class="cellContent"-->
<!--                :ref="inputRefName"-->
<!--                @mousedown="this.listenCellSelect"-->
<!--                @mouseup="this.stopListen"-->
<!--                @click="this.cellClick">-->
<!--            <input-->
<!--                    v-if="this.currentActiveCell"-->
<!--                    type="text"-->
<!--                    v-model="this.cellContent"-->
<!--                    :style="{width:this.cellWidthByContent+'px'}"-->
<!--                    @input="this.onInput"-->
<!--                    @change="this.isActive=!this.isActive"/>-->
<!--            <span v-else>{{this.cellContent}}</span>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--	import {useStore} from "vuex";-->

<!--	export default {-->
<!--		emit: ['cellClick', 'listenMouseMove', 'onInput'],-->
<!--		data() {-->
<!--			const cellWidth = useStore().getters.getBoardMatrix.itemWidth-->
<!--			return {-->
<!--				inputRefName: 'cellInput' + this.rowIndex + this.cellIndex,-->
<!--				isResized: false,-->
<!--				isActive: false,-->
<!--				cellContent: '',-->
<!--				cellWidth-->
<!--			}-->
<!--		},-->
<!--		props: ['resizedIndex', 'resizedWidth', 'cellIndex', 'rowIndex', 'isCurrentActiveCell', 'dataForSpread'],-->
<!--		methods: {-->
<!--			onInput() {-->
<!--				this.$emit('onInput', this.cellContent)-->
<!--			},-->
<!--			moveListener(e) {-->
<!--				console.log("leave", e.target)-->
<!--				this.$emit('listenMouseMove', this.cellContent)-->
<!--			},-->
<!--			stopListen() {-->
<!--				console.log('STOPLISTEN')-->
<!--				this.$refs[this.inputRefName].removeEventListener('mouseleave', this.moveListener)-->
<!--			},-->
<!--			listenCellSelect() {-->
<!--				console.log('listen')-->
<!--				this.$refs[this.inputRefName].addEventListener('mouseleave', this.moveListener)-->
<!--			}-->
<!--		},-->
<!--		updated() {-->

<!--			if (this.dataForSpread) {-->
<!--				//	this.cellContent = this.dataForSpread-->
<!--				//return this.dataForSpread-->
<!--			}-->
<!--		},-->
<!--		computed: {-->
<!--			cellWidthByContent() {-->
<!--				return this.cellContent.length < 17 ? 100 : this.cellContent.length * 5-->
<!--			},-->
<!--			currentActiveCell() {-->
<!--				return this.isCurrentActiveCell	//this.isCurrentActiveCell-->
<!--			},-->
<!--			cellClick() {-->
<!--				this.isActive = !this.isActive-->
<!--				this.$emit('cellClick', this.cellIndex)-->
<!--				setTimeout(() => {-->
<!--					this.$refs[this.inputRefName].querySelector('input').focus()-->
<!--					this.$emit('onInput', this.cellContent)-->
<!--				}, 0)-->
<!--			},-->
<!--			widthCell() {-->
<!--				if (this.resizedIndex === this.cellIndex) {-->
<!--					this.cellWidth = this.resizedWidth-->
<!--					this.isResized = true-->
<!--				}-->
<!--				return this.isResized ? this.cellWidth + 'px'-->
<!--															: 100 + 'px'-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</script>-->
<!--<style>-->
<!--    .cell {-->
<!--        border: 1px solid red;-->
<!--        outline: none;-->
<!--        position: relative;-->
<!--        width: 50px;-->
<!--        height: 100%;-->
<!--    }-->

<!--    input {-->
<!--        position: absolute;-->
<!--        z-index: 20;-->
<!--    }-->

<!--    .cellContent {-->
<!--        width: 100%;-->
<!--        background-color: aqua;-->
<!--        height: 100%;-->
<!--    }-->

<!--    input {-->

<!--    }-->
<!--</style>-->