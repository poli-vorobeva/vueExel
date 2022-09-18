<template>
    <div :ref='refName' class="topCell" :style="{width:this.cellWidth+'px'}">
        kk
        <div
                @mousedown="moveRight"
                class="resizeSubDivRight"
        ></div>
    </div>
</template>
<script>
	export default {
		emits: ['move-vertical', 'hide-vertical', 'resize-cell-x'],
		data() {
			return {
				refName: 'topCell' + this.idx,
				cellWidth: 100
			}
		},
		props: ['idx'],
		methods: {
			mouseUp(e) {
				//console.log(e.pageX,'$$$',this.idx)
				const xWidth = e.pageX - this.$refs[this.refName].getBoundingClientRect().x
			console.log("******",xWidth)
              this.$emit('resize-cell-x', xWidth,this.idx)
				this.cellWidth = xWidth
				this.$emit('hide-vertical', e.pageX)
				window.removeEventListener('mousemove', this.listenMove)
				window.removeEventListener('mouseup', this.mouseUp)
			},
			listenMove(e) {
				this.$emit('move-vertical', e.pageX)
				window.addEventListener('mouseup', this.mouseUp)
			},
			moveRight(e) {
				window.addEventListener('mousemove', this.listenMove)
			},
		}
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