<template>
    <vertical-hr :xPosition="this.xHrCoordinates"></vertical-hr>
    <horizontal-hr :yPosition="this.yHrCoordinates"></horizontal-hr>
    <app-header></app-header>
    <tool-bar></tool-bar>
    <app-board
            @hide-vertical="this.xHrCoordinates=0"
            @move-vertical="moveVertical"
            @moveHorizontalHr="moveHorizontalHr"
    ></app-board>
</template>
<script>
	import Header from './components/Header.vue'
	import ToolBar from './components/ToolBar/ToolBar.vue'
	import Board from './components/Board/Board.vue'
	import HorizontalHr from "./components/HorizontalHr.vue";
	import VerticalHr from './components/VerticalHr.vue'

	export default {
		data() {
			return {
				yHrCoordinates: 0,
				xHrCoordinates: 0
			}
		},
		components: {
			'app-header': Header, 'tool-bar': ToolBar,
			'app-board': Board, 'horizontal-hr': HorizontalHr,
			'vertical-hr': VerticalHr
		},
		methods: {
			moveHorizontalHr(yCoordinate) {
				this.yHrCoordinates = yCoordinate
			},
			moveVertical(positionX) {
				this.xHrCoordinates = positionX
			}
		}
	}

</script>
<style>
*{
    font-family: 'Albert Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
}
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
