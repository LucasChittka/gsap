<template>
    <Header :active-section="activeSection"></Header>
    <Home id="home"></Home>
    <Details id="details"></Details>
    <Contact id="contact"></Contact>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Home from '@/components/Home.vue';
import Details from '@/components/Details.vue';
import Contact from '@/components/Contact.vue';
import {useActiveSection} from "@/composables/useActiveSection.js";

const {activeSection} = useActiveSection(['home', 'details', 'contact'])
</script>


<style scoped>
</style>
