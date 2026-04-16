<template>
    <div class="bg-slate-100 h-screen content-center text-center">
        <button v-if="!showMessage" @click="next" @mouseenter="expandButton" @mouseleave="reduceButton" ref="contact"
                class="hover:bg-teal-950 cursor-pointer inline-block h-[80px] w-[220px] rounded-full bg-teal-900 text-white">
            <p>Kontakt</p>
        </button>
        <p class="text-xl text-teal-900" v-if="showMessage">$$$ Jackpot, Sie dürfen mit Kai sprechen!</p>
    </div>
</template>
<script setup>
import {ref} from 'vue';


const showMessage = ref(false);



const next = () => {
    setTimeout(()=>{
        showMessage.value = true;
    }, 300)

}


</script>