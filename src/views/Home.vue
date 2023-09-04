<template >
    <section class="overflow-hidden">
        <div class="h-screen w-screen absolute z-20 flex flex-col justify-center items-center">
            <div class="m-auto text-center">
                <h1 class="text-white font-serif font-bold text-7xl text-center align-middle font-dance mb-10"><span class="text-9xl">D</span>aniel & <span class="text-9xl">S</span>tefani</h1>
                <router-link :to="{name: 'content'}" class="text-white py-2 px-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors font-bold text-sm">Open Invitation</router-link>
            </div>
        </div>
        <div class="w-screen h-screen bg-black absolute opacity-70 z-10"></div>
        <div class="w-screen h-screen bg-[url('./assets/daniel.JPG')] bg-cover md:bg-[center_bottom_-65rem]"></div>
    </section>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>