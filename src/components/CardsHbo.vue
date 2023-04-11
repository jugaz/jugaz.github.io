<template>

   <a class="card"  @mouseover="isHovering = true" @mouseleave="isHovering = false">
     <div class="header">
       <img :src="props.image" :class="{'border-[3px] border-[#7798AB] rounded border-solid':isHovering}" />
     </div>
     <div class="body" v-if="isHovering">
      <div class="details">
          <span>{{ title }}</span>
      </div>
      
     </div>
   </a>
        

</template>

<style lang="scss" scoped>

   .separador::before {
      color: #646464;
      content: "\2022";
      display: inline-block;
      padding-right: .5vw;
   }



</style>

<script setup>
import { ref } from "vue";
const isHovering = ref(false)
const props = defineProps({
   image: null,
   tags: null,
   title: null
})
</script>
