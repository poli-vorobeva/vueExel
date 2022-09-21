<template>
    <div class='cell' :style="{width:this.widthCell}">
        <div class="cellContent" :ref="inputRefName" @click="this.cellClick">
            <input
                    v-if="this.currentActiveCell"
                    type="text"
                    v-model="this.cellContent"
                    @change="this.isActive=!this.isActive"/>
            <span v-else>{{this.cellContent}}</span>
        </div>
    </div>
</template>
<script>
	export default {
		emit: ['cellClick'],
		data() {
			return {
				inputRefName: 'cellInput' + this.rowIndex + this.cellIndex,
				isResized: false,
				cellWidth: 100,
				isActive: false,
				cellContent: ''
			}
		},
		props: ['resizedIndex', 'resizedWidth', 'cellIndex', 'rowIndex', 'isCurrentActiveCell'],
		methods: {},
		mounted() {

        //  console.log(this.isActive,'IsACT')
		},
		computed: {
			currentActiveCell(){

				return this.isCurrentActiveCell	//this.isCurrentActiveCell
            },
			cellClick() {
				this.isActive = !this.isActive
				this.$emit('cellClick', this.cellIndex)
				setTimeout(() => {
					this.$refs[this.inputRefName].querySelector('input').focus()
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

    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }

    input {

    }
</style>