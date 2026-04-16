<template>
    <div ref="details" class="h-screen bg-teal-50 flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-x-10">
            <div class="flex justify-center">
                <div class="border border-teal-400 rounded px-6 pt-6 pb-2">
                    <img class="h-100" src="../assets/assetOS.webp">
                </div>
            </div>
            <div class="flex flex-col space-y-14 text-lg">
                <div class="flex justify-end ">
                    <div ref="first" class="rounded-l-full bg-teal-900 text-white py-10 content-center w-full px-20 ">
                        AssetOS ist
                        toll
                    </div>
                </div>
                <div class="flex justify-end ">
                    <div ref="second" class="rounded-l-full bg-teal-900 text-white py-10 content-center w-4/5 px-20 ">
                        Kauft mehr
                        AssetOS
                    </div>
                </div>
                <div class="flex justify-end ">
                    <div ref="third" class="rounded-l-full bg-teal-900 text-white py-10 content-center w-3/5 px-20 ">Und
                        zwar bei
                        uns
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted, computed} from "vue";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//ScrollTrigger
//trigger
//start
//toggleActions - onEnter, onLeave, onEnterBack, onLeaveBack - play, pause, resume, restart,..
//toggleActions: 'play none none none',
//toggleActions: 'restart pause resume reset'


const first = ref();
const second = ref();
const third = ref();
const messages = [first, second, third];
const details = ref();
onMounted(() => {
    const tl = gsap.timeline(
        {
            scrollTrigger: {
                pin: false,
                trigger: details.value,
                start: 'top center',
                toggleActions: 'play none none none'
            }
        }
    );
    messages.forEach((item) => {
        tl.from(item.value, {
            x: '100vw',
            duration: 0.5,
            ease: 'easeInOut'
        })
    })
})

</script>