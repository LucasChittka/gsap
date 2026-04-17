<template>
    <div class="bg-slate-100 h-screen content-center text-center relative">
        <button @click="next" @mouseenter="expandButton" @mouseleave="reduceButton" ref="contact"
                class="hover:bg-teal-950 cursor-pointer inline-block h-[80px] w-[220px] rounded-full bg-teal-900 text-white">
            <p>Kontakt</p>
        </button>
        <div v-if="showMessage" class="absolute inset-0 flex justify-center items-center">
            <div
                class="translate-x-54 border border-teal-200 rounded-full shadow bg-teal-800 text-xl text-white w-[400px] h-[400px] text-center content-center">
                Krasses Formular oder so
            </div>

        </div>
    </div>
</template>
<script setup>
import {gsap} from 'gsap';
import {ref} from 'vue';

const contact = ref();

const showMessage = ref(false);
const blockMouseLeave = ref(false);

const expandButton = () => {
    gsap.to(contact.value, {
        height: '220px',
        duration: 0.2,
        ease: 'easeInOut'
    })
}

const reduceButton = () => {
    if (blockMouseLeave.value) return;
    gsap.to(contact.value, {
        height: '80px',
        duration: 0.2,
        ease: 'easeInOut'
    })
}

const next = () => {
    blockMouseLeave.value = true;
    const tl = gsap.timeline();
    tl.to(contact.value, {
        scale: 0.7,
        translateY: '-6rem',
        duration: 0.3,
        ease: 'easeInOut'
    })
    setTimeout(() => {
        showMessage.value = true;
    }, 500)

}


</script>