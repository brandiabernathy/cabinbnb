<template>
  <div class="home">
    <HeaderNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderNav from '@/components/Header.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HeaderNav,
  },
});
</script>
