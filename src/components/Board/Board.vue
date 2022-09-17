<template>

    <div>
        <top-row :rows="rows"></top-row>
        <board-column
                :rows='rows'
                :indx="ind"
                v-for="(c,ind) in columns"
                @stopMoveHr='stopMoveHr'
                @moveHorizontalHr="(coord)=>moveRow(ind,coord)"></board-column>
    </div>
</template>
<script>
	import Column from './Row/Row.vue'
	import TopRow from './TopRow/TopRow.vue'

	export default {
		emits:['moveHorizontalHr'],
		components: {'board-column': Column, 'top-row': TopRow},
		data() {
			return {
				columns: 5,
				rows: 5,
				activeRow: null
			}
		},
		methods: {
			stopMoveHr(c){
							//this.$refs.hrRef.style.top = `${c}px`
            },
			moveRow(ind, c) {
				console.log(ind)
				this.$emit('moveHorizontalHr',c)
	},
		}

	}
</script>
<style scoped>
    div {
        height: 300px;
        width: 100vw;
        background-color: rgba(255, 0, 0, 0.29);
        display: flex;
        flex-flow: column nowrap;
    }


</style>