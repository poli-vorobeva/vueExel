<template>
    <vertical-hr :xPosition="xHrCoordinates"></vertical-hr>
    <horizontal-hr :yPosition="yHrCoordinates"></horizontal-hr>
    <app-header></app-header>
    <tool-bar></tool-bar>
    <app-board
            @hide-vertical="xHrCoordinates=0"
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
	import {ref} from 'vue'

	export default {
		setup() {
			const yHrCoordinates = ref(0)
			const xHrCoordinates = ref(0)
			const moveHorizontalHr = (yCoordinate) => {
				yHrCoordinates.value = yCoordinate
			}
			const moveVertical = (positionX) => {
				xHrCoordinates.value = positionX
			}
			return {
				yHrCoordinates, xHrCoordinates,
				moveHorizontalHr, moveVertical
			}
		},
		components: {
			'app-header': Header, 'tool-bar': ToolBar,
			'app-board': Board, 'horizontal-hr': HorizontalHr,
			'vertical-hr': VerticalHr
		}
	}

</script>
<style>
    * {
        font-family: 'Albert Sans', sans-serif;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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

