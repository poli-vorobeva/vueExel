<template>
    <div class="rowIndex">
        <div class="rowIndexContent">indx</div>
        <div @mousedown="moveDown" class="resizeSubDivBottom"></div>
    </div>
</template>
<script>
	export default {
		emits:['move-line','stop-move-line'],
		methods: {
			listenMove(e) {
				this.$emit('move-line', e.pageY)
				window.addEventListener('mouseup', this.moveUp)
			},
			moveUp(e) {
				window.removeEventListener('mousemove', this.listenMove)
				window.removeEventListener('mouseup', this.moveUp)
				this.$emit('stop-move-line', e.pageY)
			},
			moveDown(e) {
				window.addEventListener('mousemove', this.listenMove)
			}
		}
	}
</script>
<style>
    .rowIndex {
        position: relative;
    }

    .resizeSubDivBottom {
        position: absolute;
        height: 5px;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 5;
    }

    .resizeSubDivBottom:hover {
        background-color: goldenrod;
        cursor: row-resize;
    }

    .rowIndexContent {
        width: 100%;
        height: 100%;
    }
</style>