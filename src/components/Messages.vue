<template>
    <div class="px-9">
        <div>
            <label for="name" class="font-raleway">Nama</label>
            <input type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" v-model="nameInput">
            <p>{{  nameInput }}</p>
        </div>
        <div class="mt-6">
            <label for="name" class="font-raleway">Pesan</label>
            <textarea type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" rows="4" v-model="pesan"></textarea>
        </div>
        <button type="submit" class="mt-5 px-5 py-2 bg-black text-white rounded-xl" v-on:click="getName()">Kirim Pesan</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            nameInput:null,
            pesan: null,
        }
    },

    methods: {
        getName() {
            console.log(this.nameInput, this.pesan);
        }
    }
}

</script>