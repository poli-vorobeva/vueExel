<template>
    <div>
        <top-row :rows="rows"></top-row>
        <board-column :rows='rows' v-for="c in columns"></board-column>
    </div>
</template>
<script>
    import Column from './Row/Row.vue'
import TopRow from './TopRow/TopRow.vue'
	export default {
		components:{'board-column':Column,'top-row':TopRow},
    	data() {
			return {
				columns: 5,
				rows: 5
			}
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