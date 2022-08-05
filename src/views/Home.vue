<template>
  <div class="home">
    <HeaderNav />
    <Properties />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderNav from '@/components/Header.vue';
import Properties from '@/components/Properties.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HeaderNav,
    Properties
  },
});
</script>
