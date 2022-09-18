<template>
    <div class='cell' :style="{width:this.widthCell}">
        <div class="cellContent"></div>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				isResized: false,
				cellWidth: 100
			}
		},
		props: ['resizedIndex', 'resizedWidth', 'cellIndex'],
		methods: {},
		computed: {
			widthCell() {
				if (this.resizedIndex === this.cellIndex) {
					this.cellWidth = this.resizedWidth
					this.isResized = true
				}
				return this.isResized ? this.cellWidth + 'px'
										: 100 + 'px'
			}
		}
	}
</script>
<style>
    .cell {
        border: 1px solid red;
        outline: none;
        position: relative;
    }

    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }
</style>