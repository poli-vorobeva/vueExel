<template>
    <div class='cell' :style="{width:this.widthCell}">
        <div
                class="cellContent"
                :ref="inputRefName"
                @mousedown="this.listenCellSelect"
                @mouseup="this.stopListen"
                @click="this.cellClick">
            <input
                    v-if="this.currentActiveCell"
                    type="text"
                    v-model="this.cellContent"
                    :style="{width:this.cellWidthByContent+'px'}"
                    @input="this.onInput"
                    @change="this.isActive=!this.isActive"/>
            <span v-else>{{this.cellContent}}</span>
        </div>
    </div>
</template>
<script>
	export default {
		emit: ['cellClick', 'listenMouseMove','onInput'],
		data() {
			return {
				inputRefName: 'cellInput' + this.rowIndex + this.cellIndex,
				isResized: false,
				cellWidth: 100,
				isActive: false,
				cellContent: ''
			}
		},
		props: ['resizedIndex', 'resizedWidth', 'cellIndex', 'rowIndex', 'isCurrentActiveCell', 'dataForSpread'],
		methods: {
			onInput(){
			this.$emit('onInput',this.cellContent)
            },
			moveListener(e) {
				console.log("leave", e.target)
				this.$emit('listenMouseMove', this.cellContent)
			},
			stopListen() {
				console.log('STOPLISTEN')
				this.$refs[this.inputRefName].removeEventListener('mouseleave', this.moveListener)
			},
			listenCellSelect() {
				console.log('listen')
				this.$refs[this.inputRefName].addEventListener('mouseleave', this.moveListener)
			}
		},
		updated() {

			if (this.dataForSpread) {
				//	this.cellContent = this.dataForSpread
				//return this.dataForSpread
			}
		},
		computed: {
			cellWidthByContent() {
				return this.cellContent.length<17?100:this.cellContent.length*5
			},
			currentActiveCell() {
				return this.isCurrentActiveCell	//this.isCurrentActiveCell
			},
			cellClick() {
				this.isActive = !this.isActive
				this.$emit('cellClick', this.cellIndex)
				setTimeout(() => {
					this.$refs[this.inputRefName].querySelector('input').focus()
                  this.$emit('onInput',this.cellContent)
				}, 0)
			},
			widthCell() {
				if (this.resizedIndex === this.cellIndex) {
					this.cellWidth = this.resizedWidth
					this.isResized = true
				}
				return this.isResized ? this.cellWidth + 'px'
															: 100 + 'px'
			}
		}
	}
</script>
<style>
    .cell {
        border: 1px solid red;
        outline: none;
        position: relative;
    }
input{
    position: absolute;
    z-index: 20;
}
    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }

    input {

    }
</style>