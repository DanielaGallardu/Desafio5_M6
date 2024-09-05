<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import MediosDePago from './components/MediosPago.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    MediosDePago,
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
    <MediosDePago />
    <Footer />
  </div>
</template>
