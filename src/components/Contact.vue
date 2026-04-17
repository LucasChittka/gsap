<template>
    <div class="bg-slate-100 h-screen content-center text-center relative">
        <button v-if="!showMessage" @click="next" @mouseenter="expandButton" @mouseleave="reduceButton" ref="contact"
                class="hover:bg-teal-950 cursor-pointer inline-block h-[80px] w-[220px] rounded-full bg-teal-900 text-white">
            <p>Kontakt</p>
        </button>
        <div v-if="showMessage" class="absolute inset-0 flex justify-center items-center">
            <div class="border border-teal-200 rounded-full shadow bg-teal-800 text-xl text-white w-[400px] h-[400px] text-center content-center">Krasses Formular oder so</div>

        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';

const contact = ref();

const showMessage = ref(false);
const blockMouseLeave = ref(false);




const next = () => {
    setTimeout(()=>{
        showMessage.value = true;
    }, 500)

}


</script>