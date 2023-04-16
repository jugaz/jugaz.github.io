<script setup>
import Menu from "@/components/Menu.vue";
import Cards from "@/components/Cards.vue";
import { useCards } from "@/composables/useCards"
const {tendencias, frontEnd, backEnd } = useCards();

</script>

<template>
  <Menu/>
  <div class="flex flex-col">
    <Cards :cards="tendencias" />
    <Cards :cards="frontEnd" />
    <Cards :cards="backEnd" />
  </div>

  



</template>

<style lang="scss" scoped>





</style>