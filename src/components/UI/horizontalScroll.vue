<template>
    <div class="horizontalScroll">
        <div class="right" @click="onTransition('right')">R</div>
        <div class="insideWrapper">
            <div class="inside"
                 ref="insideDiv"
                 :style="{
            	transform:`translate(${currentTranslate}px)`,
            	width:`${insideWidth}px`
            	}"
            ></div>
        </div>
        <div class="left" @click="onTransition('left')">
            L
        </div>
    </div>
</template>

<script>
	import {ref} from 'vue'

	export default {
		props: ['totalWidth'],
		setup({totalWidth}) {
			//todo delete hardcr
			const offset = 300
			const scrollWrapperWidth = document.documentElement.clientWidth - 20 - 20
			const insideWidth = ref(scrollWrapperWidth / 4)
         	const distanceToTransition = scrollWrapperWidth - insideWidth.value-20
			const steps = Math.ceil(totalWidth / offset)
			const stepSize = distanceToTransition / steps
			const currentTranslate = ref(0)
			const onTransition = (direction) => {
				if (direction === 'left') {
					if (currentTranslate.value + stepSize <= distanceToTransition) {
						currentTranslate.value += stepSize
					}else{
						currentTranslate.value=distanceToTransition
                    }
				}
				else {
					if (currentTranslate.value - stepSize >= 0) {
						currentTranslate.value -= stepSize
					}else{
						currentTranslate.value=0
                    }
				}
			}
			return {
				currentTranslate, insideWidth, onTransition
			}
		},

	}
</script>

<style scoped>
    .horizontalScroll {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 25px;
        display: flex;
        width: 100vw;
        background: #165578;
    }

    .insideWrapper {
        width: calc(100vw - 20px - 20px);
    }

    .inside {
        height: 100%;
        background: darkgoldenrod;
        transition: all 800ms ease-in-out;
        border-radius: 30px;
    }

    .right {
        width: 20px;
    }

    .left {
        width: 20px;
    }
</style>