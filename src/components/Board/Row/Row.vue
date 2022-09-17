<template>
    <div :ref="refName" :class="{'row':true}">
        <index-cell
                v-on:stop-move-line="stopMoveLine"
                v-on:move-line="moveLine"></index-cell>
        <cell-controller v-for="r in rows"></cell-controller>
    </div>
</template>
<script>
	import IndexCell from './IndexCell.vue'
	import CellController from './CellController.vue'

	export default {
		data() {
			return {
				refName: 'row' + this.indx
			}
		},
		emits: ['moveHorizontalHr'],
		props: ['rows', 'indx'],
		components: {'cell-controller': CellController, 'index-cell': IndexCell},
		mounted() {
			console.log(this.refName, '^^^^^^', this.$refs[this.refName].getBoundingClientRect().y)
		},
		methods: {
			stopMoveLine(data) {

				console.log(this.$refs)
              console.log("CurY",data)
				const y = this.$refs[this.refName].getBoundingClientRect().y
              console.log("Prev-",y)
				const newPosition = data - y
				console.log("STOPPP", this.indx, newPosition)
				this.$refs[this.refName].style.height = `${newPosition}px`
				this.$emit('stopMoveHr')
			},
			moveLine(data) {
				const y = this.$refs[this.refName].getBoundingClientRect().y

				console.log('MOYeeeeee', this.indx,y)
				this.$emit('moveHorizontalHr', data)
			}
		},
		computed: {}
	}
</script>
<style>
</style>
//todo if start position more then finish, this.row height change

<style scoped>

    .row {
        height: 50px;
        display: flex;
        flex-flow: row nowrap;
        position: relative;
    }

    /*.moveLine:after {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    bottom:var(--posit);*/
    /*    border-bottom: 5px dashed blue;*/
    /*    width: 100%;*/
    /*    height: 5px;*/
    /*}*/

    .rowIndex {
        width: 30px;
        position: relative;
    }
</style>