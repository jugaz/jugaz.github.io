<template>

   <div :class="'card '+ props.cardName"  @mouseover="isHovering = true" @mouseleave="isHovering = false">
      <div class="bg">
         <div class="details" v-show="isHovering">
            <span>{{ title }}</span>
            <div v-for="tag in props.tags" :key="tag">
               <span>{{ tag }}</span>
            </div>
         </div>
      </div>
   
      
   </div>
        

</template>

<style lang="scss" scoped>

   .default {
      .bg {
         background-image: url("http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg");
         background-position: top;
         background-repeat: no-repeat;
         background-size: cover;
         height: 10rem;
         margin-right: 5px;
         width: 320px;
         .details {
            background-image: linear-gradient(180deg,rgba(0,0,0,.7),transparent);
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: flex-end;
            opacity: 1;
            padding: .5rem 1rem;
            transition: all .3s ease-in-out;
            &::before{
     
               content: "";
               background-image: linear-gradient(0deg,rgba(0,0,0,.75),transparent);
               bottom: -3px;
               height: 40%;
               left: 0;
               position: absolute;
               width: 100%;
            }
         }
      }
   
   }


.cards:hover > .card:not(:hover) {
  opacity: 0.5;
}
</style>

<script setup>
import { ref } from "vue";
const isHovering = ref(false)
const props = defineProps({
   cardName: {
      type: String,
      default: 'default'
   },
   tags: null,
   title: null
})
</script>
