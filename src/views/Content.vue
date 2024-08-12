<script setup>

import Countdown from './../components/Countdown.vue'
import Gallery from './../components/Gallery.vue'
import Messages from './../components/Messages.vue'
import List from './../components/List.vue'
import {ref} from 'vue';


const mssg = ref(null);
// Fetch Data REST API
fetch('https://api.elitech.id/mssg/data')
.then(response => response.json())
.then(data => mssg.value = data);


</script>

<template>
<!-- <audio controls id="musicplayer" autoplay control class="fixed bottom-0 left-0 mx-auto w-full mb-5 z-40 ">
    <source src="/src/assets/backsound.ogg" type="audio/ogg">
    <source src="/src/assets/backsound.mp3" type="audio/mpeg"> -->

    <!-- Sorry, but your browser doesn't support audio.
</audio> -->

<!-- <audio id="musicplayer" autoplay >
    <source src="/src/assets/backsound.mp3" type="audio/mpeg">
</audio> -->

    <section class="overflow-x-hidden"> 
        <video class="w-screen h-screen object-contain object-center" src="../assets/test.mp4" autoplay loop  playsinline>
                <!-- <source src="../assets/vid2.mp4" type="video/mp4"> -->
            </video>
    </section>
</template>