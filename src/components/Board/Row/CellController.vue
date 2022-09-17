<template>
    <div class='cell'>
        <div class="cellContent"></div>
    </div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style>
    .cell {
        border: 1px solid red;
        width: 100px;
        outline: none;
        position: relative;
    }
    .cellContent {
        width: 100%;
        background-color: aqua;
        height: 100%;
    }
</style>