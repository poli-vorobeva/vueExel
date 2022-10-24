<template>
    <div
            v-if="idx>0"
            class="topCell"
            :style="{width:cellWidth+'px'}">
        <slot></slot>
        <div
                @mousedown="moveRight"
                class="resizeSubDivRight"
        ></div>
    </div>
</template>
<script>
	export default {
		props:['idx'],
		//emits: ['move-vertical', 'hide-vertical', 'resize-cell-x'],
    	setup({idx}, context) {
			const refName = 'topCell' + idx
			const cellWidth = 100
			const mouseUp = (e) => {
				// const xWidth = e.pageX - this.$refs[this.refName].getBoundingClientRect().x
				// console.log("******", xWidth)
				// this.$emit('resize-cell-x', xWidth, this.idx)
				// this.cellWidth = xWidth
				// this.$emit('hide-vertical', e.pageX)
				// window.removeEventListener('mousemove', this.listenMove)
				// window.removeEventListener('mouseup', this.mouseUp)
			}
			const listenMove = (e) => {
				console.log(refName,'REFname')
              console.log(e.pageX)
				// this.$emit('move-vertical', e.pageX)
				// window.addEventListener('mouseup', this.mouseUp)
			}
			const moveRight = (e) => {
				// window.addEventListener('mousemove', this.listenMove)
			}
			return{
				idx,refName,cellWidth,mouseUp,listenMove,moveRight
            }
		},
	}
</script>
<style scoped>
    .topCell {
        width: 100px;
        height: 30px;
        border: 1px solid olivedrab;
        position: relative;
    }

    .resizeSubDivRight {
        width: 5px;
        height: 95%;
        position: absolute;
        top: 0;
        right: 0;
    }

    .resizeSubDivRight:hover {
        background: firebrick;
        cursor: col-resize;
    }
</style>