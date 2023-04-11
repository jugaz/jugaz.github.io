<script setup>
import { ref } from "vue";
import Menu from "@/components/Menu.vue";
import Cards from "@/components/Cards.vue";
import CardsHbo from "@/components/CardsHbo.vue";
import CardsNetflix from "@/components/CardsNetflix.vue";


const cards = ref([
  { id: 1, cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Front End', tags: ['Vue','Tailwind']},
  { id: 2, cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Back End', tags: ["Node", "Express"] },
  { id: 3, cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Mobile', tags: ["React Native", "Firebase"] },
]);

console.log("cards", cards);
</script>

<template>
  <Menu/>

  <div class="cards flex">
    <CardsNetflix v-for="card in cards" :key="card.id" :image="card.image" :tags="card.tags" :title="card.title"/>
  </div>

  <br>

  <div class="cards flex">
    <CardsHbo v-for="card in cards" :key="card.id" :image="card.image" :tags="card.tags" :title="card.title" />
  </div>

  
  <br>
  <br>
  <br>

  <div class="cards flex">
    <Cards v-for="card in cards" :key="card.id" :image="card.image" :tags="card.tags" :title="card.title" />
  </div>
</template>
