<template>
    <div class="h-screen content-center bg-white text-3xl">
        <a @mouseleave="resumeTween" @mouseenter="pauseTween" href="#details" ref="logo" class="block h-100 hover:bg-teal-950 transition-colors duration-300 w-100 rounded-full mx-auto bg-teal-900 content-center text-center"><span
            class="text-teal-300">PARK</span><span class="text-white">EFFICIENT</span>
        </a>
    </div>
</template>
<script setup>
import gsap from 'gsap';
import {ref, onMounted, onUnmounted} from "vue";

const logo = ref();
let logoTween;

onMounted(() => {
    logoTween = gsap.to(logo.value, {
        duration: 1,
        scale: 1.1,
        ease: 'easeInOut',
        repeat: -1,
        yoyo: true,
        }
    )
})

const pauseTween = ()=>logoTween.pause()
const resumeTween = ()=>{logoTween.resume()}

onUnmounted(() => logoTween.kill())


</script>