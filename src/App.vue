<template>
    <vertical-hr :xPosition="xHrCoordinates"></vertical-hr>
    <horizontal-hr :yPosition="yHrCoordinates"></horizontal-hr>
    <div class="sticky">
        <app-header></app-header>
        <tool-bar></tool-bar>
    </div>
    <app-board
            @hide-vertical="xHrCoordinates=0"
            @move-vertical="moveVertical"
            @moveHorizontalHr="moveHorizontalHr"
    ></app-board>
    <horizontal-scroll :totalWidth='boardWidth'></horizontal-scroll>
</template>
<script>
	import Header from './components/Header.vue'
	import ToolBar from './components/ToolBar/ToolBar.vue'
	import Board from './components/Board/Board.vue'
	import HorizontalHr from "./components/HorizontalHr.vue";
	import VerticalHr from './components/VerticalHr.vue'
	import {ref} from 'vue'
	import HorizontalScroll from './components/UI/horizontalScroll.vue'
	import {useStore} from "vuex";

	export default {
		setup() {
			const store = useStore()
			const yHrCoordinates = ref(0)
			const xHrCoordinates = ref(0)
			const boardWidth = store.getters.getBoardWidth
      	    const moveHorizontalHr = (yCoordinate) => {
				yHrCoordinates.value = yCoordinate
			}
			const moveVertical = (positionX) => {
				xHrCoordinates.value = positionX
			}
			return {
				yHrCoordinates, xHrCoordinates, boardWidth,
				moveHorizontalHr, moveVertical
			}
		},
		components: {
			'app-header': Header, 'tool-bar': ToolBar,
			'app-board': Board, 'horizontal-hr': HorizontalHr,
			'vertical-hr': VerticalHr,
			'horizontal-scroll': HorizontalScroll
		},
	}

</script>
<style>
    * {
        font-family: 'Albert Sans', sans-serif;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        overflow: hidden;
    }

    .sticky {
        position: sticky;
        top: 0;
        left: 0;
    }
</style>

<!--<template>-->
<!--    <div class="blue"></div>-->
<!--    <div class="red">-->
<!--        <input type="text" ref="input1" :value="v" @input="inputF"/>-->

<!--       <teleport to=".blue">-->
<!--           <input type="text" ref="input2" :value="v"  @input="inputF"/>-->
<!--       </teleport>-->

<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--	import {ref, computed} from 'vue'-->

<!--	export default {-->
<!--		setup() {-->
<!--			const v = ref('')-->
<!--          -->
<!--          const inputF=(e)=>{-->
<!--				v.value=e.target.value-->
<!--          }-->
<!--			return {-->
<!--				v,inputF-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</script>-->

<!--<style scoped>-->
<!--.red{-->
<!--    background: indianred;-->
<!--    height: 100px;-->
<!--    margin-top: 40px;-->
<!--}-->
<!--    .blue{-->
<!--        background: darkgoldenrod;-->
<!--        height: 100px;-->
<!--    }-->
<!--</style>-->

