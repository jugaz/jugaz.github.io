<template>

   <a class="card" @mouseover="isHovering = true" @mouseleave="isHovering = false">
     <div class="header">
       <img :src="props.image" />
     </div>
     <div class="body" v-show="isHovering">
      <div class="details">
          <span>{{ title }}</span>
        </div>
       <div class="details flex">
        
         <div v-for="tag in props.tags" :key="tag">
           <span>{{ tag }}</span>
           <span class="separador" v-if="tag !== props.tags[props.tags.length - 1]"></span>
         </div>
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

   .card {
      box-sizing: border-box;
      display: inline-block;
      padding: 0 .2vw;
      position: relative;
      vertical-align: top;
      white-space: normal;
      z-index: 1;
      transition: all 150ms ease-in-out; 

      a {
         display: block;
         
         .header {
            height: 0;
            overflow: hidden;
            position: relative;
            width: 100%;
            img {
               cursor: pointer;
               bottom: 0;
               left: 0;
               position: absolute;
               right: 0;
               top: 0;
               width: 100%;
            }
         }
      }
   }

  

.cards:hover > .card:hover {
  transform: scale(1.15);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 10;
}


.cards:hover > .card:not(:hover) {
  opacity: 0.5;
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
