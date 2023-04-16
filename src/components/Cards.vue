
<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from 'vue-router'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const cargando = ref(true)

const onSwiper = (swiper) => {
   console.log("swiper",swiper)
   // console.log("init",swiper.init((eventsListeners)=> {
   //    console.log("eventsListeners",eventsListeners)
   // }))
   swiper.on('init', function() {
      console.log('Swiper ha terminado de inicializarse');
      // aquí puedes agregar cualquier otra acción que desees ejecutar después de que Swiper se haya inicializado
      cargando.value = false // Set cargando a false para indicar que Swiper ha terminado de cargar.
   });
  
}
const props = defineProps({
   cards: {
    type: Array,
  },

})
</script>
<template>
   <div v-if="cargando">Cargando...</div>
   {{ cargando }}
   <div  class="relative m-auto custom-div" style="max-width: 112rem; transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;" 
      v-for="(item, index) in props.cards" :key="index">

      <h2 @mouseover="item.isHovering = true" @mouseleave="item.isHovering = false">
         <RouterLink class="flex items-center text-xl font-medium min-w-[8.148rem] m-[0 4% .5em]" style="text-decoration:none;" :to="{name: item.linkRouter}">
            <div class="table-cell font-medium text-xl ">{{ item.title }}</div>
            <div class="flex items-center">
               <div :class="'explore cursor-pointer text-xs flex items-center mr-1 whitespace-nowrap text-[#2E92CC] ' + (item.isHovering ? 'max-w-[200px] opacity-100' : 'opacity-0 max-w-0')" style="transition: max-width 1s,opacity 1s,transform .75s;">Explorar todos</div>
               <div :class="'arrow text-xs text-[#2E92CC] '+ (item.isHovering ? 'flex items-center' : 'hidden')" style="transition: transform .75s;"></div>
            </div>
         </RouterLink>
      </h2> 
      <Swiper 
      :modules="[Navigation]"
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
            slidesPerView: item.slidesPerView,
            spaceBetween: item.slidesPerView,
         },
         
    }"

    class="cursor-pointer w-full"
    @swiper="onSwiper"
    >
    <SwiperSlide 
      v-for="(item, index) in item.listado"
      :key="index"
      :class="'card ' + item.cardName + (item.isHovering ? 'z-[1]' : '')"
      @mouseover="item.isHovering = true" @mouseleave="item.isHovering = false"
      style="height: 400px;"
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
   </div>
 
</template>

<style lang="scss" scoped>

   .custom-div {
      @apply pt-5
   }

   .custom-div:first-child {
      @apply pt-0
   }
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

   h2:hover{
      .explore {
         transform: translate(1vw);
      }

      .arrow {
         font-size: .65vw;
         transform: translate(1vw);
      }

      .arrow::before   {
         content: ">";
      }
   }
  
</style>


