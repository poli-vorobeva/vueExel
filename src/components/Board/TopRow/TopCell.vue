<template>
    <div class="topCell">
        kk
        <div @mousedown="moveRight" class="resizeSubDivRight"></div>
    </div>
</template>
<script>
	export default {
		methods: {
			moveRight(e) {
				const listenMove = (e) => {
					console.log(e.pageX)
					window.addEventListener('mouseup', () => {
						window.removeEventListener('mousemove', listenMove)
					})
				}
				window.addEventListener('mousemove', listenMove)
				console.log(e.pageX)
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