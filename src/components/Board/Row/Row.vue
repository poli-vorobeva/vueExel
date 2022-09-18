<template>
    <div :ref="refName" :class="{'row':true}">
        <index-cell
                v-on:stop-move-line="stopMoveLine"
                v-on:move-line="moveLine"></index-cell>
        <cell-controller
                :resizedIndex="this.resizedIndex"
                :resizedWidth="this.resizedWidth"
                :cell-index="cellIndex"
                v-for="(r,cellIndex) in rows"></cell-controller>
    </div>
</template>
<script>
	import IndexCell from './IndexCell.vue'
	import CellController from './CellController.vue'

	export default {
		data() {
			return {
				refName: 'row' + this.indx
			}
		},
		emits: ['moveHorizontalHr'],
		props: ['rows', 'indx','resizedIndex','resizedWidth'],
		components: {'cell-controller': CellController, 'index-cell': IndexCell},
		methods: {
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