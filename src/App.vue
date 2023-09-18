<template>
  <router-view />
</template>

<script setup>

import { RouterView } from 'vue-router';

// console.log('test');
let audio = document.getElementsByTagName('audio');
const openButton = document.querySelector('#openInv');

// console.log(openButton);
function playy(){
  alert('testing');
}

</script>