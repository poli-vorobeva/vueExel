<template>
    <hr :style="{top:yPosition+'px'}"/>
</template>

<script>
	export default {
        props:{
        	yPosition:{
        	type:Number,
              default:0
          }},
      mounted() {
        	//console.log(this.yPosition)
      }
		}

</script>

<style scoped>
    hr {
        margin: 0;
        border-top: 1px dashed blue;
        width: 100vw;
        position: absolute;
        z-index: 10;
    }
</style>