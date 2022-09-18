<template>
    <div>
        <top-row
                @resize-cell-x="resizeCellX"
                @hide-vertical="hideVertical"
                @move-vertical="moveVertical"
                :rows="rows"></top-row>
        <board-row
                :rows='rows'
                :indx="ind"
                :resizedIndex="this.resizedIndex"
                :resizedWidth="this.rowWidth"
                v-for="(c,ind) in columns"
                @moveHorizontalHr="(coord)=>moveRow(ind,coord)"></board-row>
    </div>
</template>
<script>
	import Row from './Row/Row.vue'
	import TopRow from './TopRow/TopRow.vue'

	export default {
		emits: ['moveHorizontalHr', 'move-vertical', 'hide-vertical'],
		components: {'board-row': Row, 'top-row': TopRow},
		data() {
			return {
				columns: 5,
				rows: 5,
				activeRow: null,
				rowWidth: null,
				resizedIndex: null
			}
		},
		methods: {
			resizeCellX(width, idx) {
				this.resizedIndex = idx
				this.rowWidth = width
				console.log(this.rowWidth, '--', this.resizedIndex)
			},
			hideVertical() {
				this.$emit('hide-vertical')
			},
			moveVertical(positionX) {
				this.$emit('move-vertical', positionX)
			},
			moveRow(ind, c) {
				this.$emit('moveHorizontalHr', c)
			},
		}
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
</style>