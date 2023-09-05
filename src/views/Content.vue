<script setup>

import Countdown from './../components/Countdown.vue'
import Gallery from './../components/Gallery.vue'
import Messages from './../components/Messages.vue'
import List from './../components/List.vue'
import {ref, onMounted} from 'vue';
import api from '../api/index';
const posts = ref([]);
const fetchDataPosts = async () => {
    await api.get('https://api.elitech.id/mssg/data')
    .then(response =>{
        posts.value = response.data.data
    })
};

onMounted(() => {
    fetchDataPosts();
});

</script>

<template>
<audio id="musicplayer" autoplay>
    <source src="/src/assets/backsound.mp3" />
</audio>

    <section class="overflow-x-hidden"> 

        <!-- Banner -->
        <div class="h-screen w-screen absolute z-20 flex flex-col justify-center ">
            <div class="mt-auto mb-36 ml-10">
                <p class="text-white text-3xl align-middle font-vibes mb-2">The Wedding Of</p>
                <p class="text-white font-prata leading-snug font-bold text-6xl ">Daniel & Stefani</p>
                <p class="text-white text-xl font-cour">Rabu, 04 Oktober 2023</p>
            </div>
        </div>
        <div class="w-screen h-screen bg-black absolute opacity-60 z-10"></div>
        <div class="w-screen h-screen mb-12 bg-center bg-black overflow-hidden">
            <video class="w-screen h-full object-cover object-center" autoplay loop >
                <source src="../assets/vid2.mp4" type="video/mp4">
            </video>
        </div>
        
        <!-- Ayat Alkitab -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:pl-10 items-center">
            <div class="image w-full h-96 lg:h-screen bg-[url('./assets/daniel.JPG')] bg-cover rounded-3xl bg-center">
            </div>
            <div class="ayat justify-center">
                <p class="leading-8 text-xl text-center font-raleway italic">"Sebab pada awal dunia, Allah menjadikan mereka laki-laki dan perempuan, sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan isterinya, sehingga keduanya itu menjadi satu daging. Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu apa yang dipersatukan Allah, Tidak boleh diceraikan oleh Manusia"</p>
            
                <div class="grid grid-cols-3 items-center mt-6">
                    <hr class="border-black">
                    <p class="text-center font-cour">Markus 10:6-8</p>
                    <hr class="border-black">
                </div>
            </div>
        </div>

        <!-- Pengantin -->
        <div class="foto mt-8 px-4 mb-8">
            <hr class="mb-8">
            <p class="text-center text-lg font-cour">Kindly honor us with your presence at the marriage ceremony of...</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                <img src="../assets/5.jpg" alt="" class="w-80 mx-auto h-80 rounded-full object-top object-cover">
                <div>
                    <p class="text-black font-cour text-4xl lg:text-6xl text-center">Stefani Dwi Hardiyanti</p>
                    <p class="text-center text-lg font-bold font-raleway mt-4">Putri kedua dari</p>
                    <p class="text-center font-raleway">Suyadi (Alm) & Enny Puspandari  </p>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-5 mt-9 mb-8 items-center">
                <hr>
                <p class="text-center font-dance text-3xl">&</p>        
                <hr>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-8">
                <img src="../assets/4.jpg" alt="" class="w-80 mx-auto h-80 rounded-full object-cover object-top">
                <div>
                    <p class="text-black font-cour text-4xl lg:text-6xl text-center">Daniel Oktafian Kalele</p>
                    <p class="text-center text-lg font-bold font-raleway mt-4">Putra pertama dari</p>
                    <p class="text-center font-raleway">Yan Piet Kalele & Duwi Esti Wahyuningsih</p>
                </div>
            </div>
        </div>

        <!-- Save the Date -->
        <div>
            <div class="w-screen h-screen bg-black absolute opacity-60 z-10"></div>
            <div class="h-full w-full tanggal absolute  z-20">
                    <div class="py-7 w-screen  z-20 flex flex-col justify-center text-center mt-10">
                        <p class="text-white text-5xl align-middle font-vibes mb-8">Save The Date</p>
                        <Countdown></Countdown>
                        <div class="mb-auto text-center lg:grid lg:grid-cols-2">
                            <div class="px-8 py-6 bg-black mx-6 mt-7 rounded-xl">
                                <div class="image w-full h-48 bg-[url('./assets/9.jpg')] bg-cover rounded-2xl bg-center mb-6"></div>
                                <h2 class="text-white font-prata text-2xl">Holy Matrimony</h2>
                                <p class="text-white text-lg mb-4 font-raleway mt-3">Rabu, 04 Oktober 2023</p>
                                <hr class="mb-3">
                                <p class="text-white font-raleway mt-3">Jam : 12:00 WIB s/d Selesai</p>
                                <p class="text-white font-raleway mt-3">Kapel Graha Bethany Nginden</p>
                                <p class="text-white font-raleway mt-3">Jl. Nginden Intan Timur I no. 29</p>
                                <p class="text-white mb-6 font-raleway mt-3">Surabaya</p>
                                <a href="https://goo.gl/maps/tEKXapGxT8tbZwfV7" target="_blank" class="bg-yellow-600 font-bold text-white px-4 py-2 rounded-md font-raleway mt-3">See Location</a>
                            </div> 
                            <div class="px-8 py-5 bg-black mx-6 mt-7 rounded-xl">
                                <div class="image w-full h-48 bg-[url('./assets/1.jpg')] bg-cover rounded-2xl bg-center mb-6"></div>
                                <h2 class="text-white font-prata text-2xl">Resepsi</h2>
                                <p class="text-white text-lg mb-4 font-raleway mt-3">Rabu, 04 Oktober 2023</p>
                                <hr class="mb-3">
                                <p class="text-white font-raleway mt-3">Jam : 16:00 WIB s/d 21:00 WIB</p>
                                <p class="text-white font-raleway mt-3">Jl. Margorukun IX/10</p>
                                <p class="text-white mb-6 font-raleway mt-3">Surabaya</p>
                                <a href="https://maps.app.goo.gl/ZRjRP1kBqR6XeBE8A?g_st=iw" target="_blank" class="bg-yellow-600 font-bold text-white px-4 py-2 rounded-md font-raleway mt-3">See Location</a>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="w-full h-screen bg-[url('./assets/datebg.JPG')]  bg-cover bg-center"></div>
                <div class="w-screen h-screen bg-black absolute opacity-60 z-10"></div>
                <div class="w-full h-screen bg-[url('./assets/11.jpg')]  bg-cover bg-top"></div>
        </div>

        <!-- Gallery -->
        <div class="gallery mt-12 mb-12 ">
            <p class="text-5xl align-middle font-vibes mb-8 text-center">Gallery</p>
            <Gallery></Gallery>
        </div>

        <!-- Pesan -->
        <div class="pesan mt-20 mb-12">
            <p class="text-5xl align-middle font-vibes mb-8 text-center">Kirim Pesan</p>
            <Messages></Messages>
        </div>


        <!-- List Pesan -->

        <div class="py-9 px-8 bg-black h-96 overflow-scroll">
    <!-- <List></List> -->
    
            <h2 class="text-white font-vibes text-5xl text-center">Pesan Kerabat</h2>
            <div  class="mb-7 px-4 py-3 rounded-lg border-2 border-white mt-6" v-for="(post,index) in posts" :key="index">
                <h3 class="text-xl font-prata font-bold mb-4 text-white">{{post.nama}}</h3>
                <p class="font-raleway text-white">{{post.pesan}}</p>
            </div>
        </div>

<!-- Ucapan Terimakasih -->
<div class="">
    <div class="absolute px-8 py-7 text-center z-30" >
        
        <p class="text-lg font-cour text-black ">Kami yang berbahagia. Keluarga besar kedua mempelai</p>
        <h2 class="text-5xl font-dance font-bold mt-5 text-black">Daniel & Stefani</h2>
        <p class="text-lg font-cour text-black mt-5">Atas Kehadiran dan Doa Restunya <br> Kami Ucapkan Terimakasih</p>
    </div>

    <div class="w-screen h-72 bg-white absolute opacity-70 z-10"></div>
    <div class="w-full h-72 bg-[url('./assets/12.jpg')]  bg-cover bg-top"></div>
</div>
    </section>
</template>