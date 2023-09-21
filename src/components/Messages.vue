<template>
    <div class="px-9">
        <form @submit.prevent="inputData">
            <div>
                <label for="name" class="font-raleway">Nama</label>
                <input type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" v-model="nama">
            </div>
            <div class="mt-6">
                <label for="name" class="font-raleway">Pesan</label>
                <textarea type="text" name="name" id="name" class="w-full border border-black mt-3 px-4 py-2 rounded-2xl" rows="4" v-model="pesan"></textarea>
            </div>
            <button type="submit" class="mt-5 px-5 py-2 bg-black text-white rounded-xl" >Kirim Pesan</button>
        </form>
    </div>
</template>

<script>

export default {
    data(){
        return {
            postData: {
                nama:'',
                pesan:'',
            }
        }
    },

    methods: {
        inputData() {
            fetch('https://api.elitech.id/mssg/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama: this.nama,
                    pesan: this.pesan,
                })
            })
            .then(response => response.json())
            // .setTimeout(() => {
            //     window.location.reload
            // }, 1000);
            // .then(data => console.log(data))
            .then(window.location.reload())
        },

       
    }
}

</script>