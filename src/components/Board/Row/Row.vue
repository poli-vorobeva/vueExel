<template>
    <div :ref="refName" :class="{'row':true}">
        <index-cell
                v-on:stop-move-line="stopMoveLine"
                v-on:move-line="moveLine"></index-cell>
        <cell-controller
                @onInput="this.onInput"
                @listenMouseMove="this.listenMouseMove"
                :key=this.cellKey(this.indx,cellIndex)
                @cellClick="clickCell"
                :resizedIndex="this.resizedIndex"
                :resizedWidth="this.resizedWidth"
                :cell-index="cellIndex"
                :rowIndex="this.indx"
                :dataForSpread="this.onListenMove && this.dataForSpread"
                :isCurrentActiveCell="cellIndex===this.currentActiveCellColumn
                    && this.indx===this.currentActiveCellRow"
                v-for="(r,cellIndex) in rows"></cell-controller>
    </div>
</template>
<script>
	import IndexCell from './IndexCell.vue'
	import CellController from './CellController.vue'

	export default {
		emit: ['onListenMove'],
		data() {
			return {
				refName: 'row' + this.indx,
				dataForSpread: '',
              isMultiSelect:false
			}
		},
		emits: ['moveHorizontalHr', 'cellClick','onInput'],
		props: ['rows', 'indx', 'resizedIndex', 'resizedWidth', 'currentActiveCellColumn',
			'currentActiveCellRow', 'dataForMultiSelect', 'isMultiSelect'],
		components: {'cell-controller': CellController, 'index-cell': IndexCell},
		updated() {
			if (this.isMultiSelect) {

			}
		},
		methods: {
			onInput(data){
				this.$emit('onInput',data)
            },
			listenMouseMove(data) {
				this.$emit('onListenMove', data)
			},
			clickCell(cellIndex) {
				this.$emit('cellClick', cellIndex, this.indx)
			},
			stopMoveLine(data) {
				const y = this.$refs[this.refName].getBoundingClientRect().y
				const newPosition = data - y
				this.$refs[this.refName].style.height = `${newPosition}px`
				//this.$emit('stopMoveHr')
			},
			moveLine(data) {
				const y = this.$refs[this.refName].getBoundingClientRect().y
				this.$emit('moveHorizontalHr', data)
			}
		},
		computed: {
			cellKey() {
				return function (row, cell) {return `cell${row}${cell}`}
			}
		}
	}
</script>
<style>
</style>
//todo if start position more then finish, this.row height change

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