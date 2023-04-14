<script setup>
import { ref } from "vue";
import Menu from "@/components/Menu.vue";
import Cards from "@/components/Cards.vue";




const cards = ref([
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vue', tags: {title: 'Vue', desc: 'Tailwind'}, isHovering:false},
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Node', tags: {title: 'Node', desc: 'Express'}, isHovering:false },
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel React', tags: {title: 'React Native', desc: 'Firebase'}, isHovering:false },
  {cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",  title: 'Carrusel Flutter', tags: {title: 'Flutter', desc: 'Dart'}, isHovering:false },
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Angular', tags: {title: 'Angular', desc: 'Typscript'}, isHovering:false },
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vite', tags: {title: 'Vite', desc: 'Html'}, isHovering:false },
  { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Games', tags: {title: 'Unity', desc: 'Unreal'}, isHovering:false }
]);

console.log("cards", cards);
</script>

<template>
  <Menu/>


 
  
<div class="relative m-auto" style="max-width: 112rem;">  

  <Cards :cards="cards"  />
  <!-- <CardsHbo :cards="cardsHboMax"  />
  <CardsNetflix :cards="cardsNetflix"  /> -->

</div>






  
 
</template>
