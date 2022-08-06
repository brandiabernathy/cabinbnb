<template>
  <div class="home">
    <HeaderNav />
    <Properties />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/Footer.vue';
import HeaderNav from '@/components/Header.vue';
import Properties from '@/components/Properties.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Footer,
    HeaderNav,
    Properties
  },
});
</script>
