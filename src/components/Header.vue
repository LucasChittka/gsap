<template>
    <header class="z-50 fixed top-0 inset-x-0 flex justify-center">
        <nav class="flex justify-center space-x-10 px-10 py-2 rounded-full mt-6 bg-slate-200/60 backdrop-blur">
            <a href="#home" class="font-light" :class="{ 'font-semibold': activeSection === 'home' }">Home</a>
            <a href="#details" class="font-light" :class="{ 'font-semibold': activeSection === 'details' }">Details</a>
            <a href="#contact" class="font-light"  :class="{ 'font-semibold': activeSection === 'contact' }">Contact</a>

        </nav>
    </header>

</template>
<script setup>
const props = defineProps({activeSection: String})
</script>
