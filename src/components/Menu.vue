<template>
    <header class="flex justify-between px-9 py-2 fixed top-0 left-0 right-0 w-full">
        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7696A8" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 20v-16l7 16v-16" />
        </svg>
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7696A8" fill="none" stroke-linecap="round" stroke-linejoin="round" @click="isCurrent = !isCurrent">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <input type="text" placeholder="Hola" v-if="isCurrent">
        </div>


    </header>

</template>

<style lang="scss" scoped>

</style>

<script setup>
import { Octokit } from "@octokit/core";

import { ref } from "vue";

    const isCurrent = ref(false) 

   // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
        auth: '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'
    })

    
    console.log({
        "octokit":octokit
    })

    


    // await octokit.request('GET /users/{jugaz}/repos', {
    //     username: 'jugaz',
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28'
    //     }
    // })




</script>
