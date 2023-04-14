<template>


   <Swiper 
      :modules="[Navigation, EffectFade]"
      :breakpoints="{
         '640': {
         slidesPerView: 1,
         spaceBetween: 10,
         },
         '768': {
         slidesPerView: 2,
         spaceBetween: 20,
         },
         '1024': {
            slidesPerView: 5,
            spaceBetween: 5,
         },
         
    }"

    class="cursor-pointer w-full"
    
    >
    <SwiperSlide 
      v-for="(item, index) in props.cards"
      :key="index"
      :class="'card ' + item.cardName + (item.isHovering ? 'z-[1]' : '')"
      @mouseover="item.isHovering = true" @mouseleave="item.isHovering = false"
    >
 
   <div class="item w-full">
      <div class="details py-2 px-4" v-show="item.isHovering">
         <h3 class="text-white text-left font-bold text-lg">{{ item.title }}</h3>
         <div class="flex">
            <span class="text-base mr-2 text-[#2e66cc] ">{{ item.tags.title }}</span>
            <span class="text-base">{{ item.tags.desc }}</span>
         </div>
         
      </div>
   </div>
  

    </SwiperSlide>
   </Swiper>
        

</template>

<style lang="scss" scoped>
   .swiper {
      height: 100%;
   }

   .swiper-wrapper {
      box-sizing: border-box;
   }

   .swiper-slide {
      align-items: center;
      box-sizing: border-box;
      display: block;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: center;
      text-align: center;
      transform: translate3d(-2rem,0,0);
   }

   .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .card {       
      // transition: all .3s ease-in-out;
      padding: 1rem 0;
      .item {
         background-image: url("http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg");
         margin: 0 .25rem;
         height: 10rem;
         background-position: top;
         background-repeat: no-repeat;
         background-size: cover;
         border: 3px solid transparent;


         .details {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: .5rem 1rem;
            opacity: 1;
            transition: all .3s ease-in-out;
            background-image: linear-gradient(180deg,#000000b3,transparent);
     
       
            &::before{
               content: "";
               position: absolute;
               bottom: -3px;
               left: 0;
               width: 100%;
               background-image: linear-gradient(0deg,#000000bf,transparent);
               
            }
         }
      }
   
   }


   .card:not(:hover) {
      .details {
         opacity: 0;
         visibility: hidden;
      }
   }


 
   .card:hover ~ .card {
      transform: translate3d(2rem,0,0);
   }

   .card:first-child:hover {
      padding-left: 1.6rem;
   }

   .card:hover {
      transform: scale(1.2);
      opacity: 1;
      transition: all .3s ease-in-out;
      .details {
         opacity: 1;
         visibility: visible;
      }

   }
  
</style>


<script setup>
import { ref } from "vue";
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


const props = defineProps({
   cards: {
    type: Array,
  },

})
</script>
