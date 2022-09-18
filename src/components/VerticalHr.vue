<template>
   <div :style="{width:xPosition+'px'}">

   </div>
</template>

<script>

	export default {
	   props:['xPosition'],
    }
</script>

<style scoped>
   div{
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       border-right: 2px dashed teal;
      z-index: 10;
   }
</style>