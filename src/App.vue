<template>
    <horizontal-hr :yPosition="this.yHrCoordinates"></horizontal-hr>
    <app-header></app-header>
    <tool-bar></tool-bar>
    <app-board @moveHorizontalHr="moveHorizontalHr"></app-board>
</template>
<script>
	import Header from './components/Header.vue'
	import ToolBar from './components/ToolBar/ToolBar.vue'
	import Board from './components/Board/Board.vue'
	import HorizontalHr from "./components/HorizontalHr.vue";

	export default {
		data(){
			return{
				yHrCoordinates:0
            }
        },
		components: {
			'app-header': Header, 'tool-bar': ToolBar,
			'app-board': Board, 'horizontal-hr': HorizontalHr
		},
		methods: {
			moveHorizontalHr(yCoordinate) {
				this.yHrCoordinates=yCoordinate
							console.log(this.yHrCoordinates)

						}
		}
	}

</script>
<style>

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
