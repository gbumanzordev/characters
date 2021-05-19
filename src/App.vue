<template>
  <Navbar />
  <router-view />
</template>

<script>
import './assets/css/resetter.css';
import Navbar from '@/components/core/Navbar';

export default {
  name: 'App',
  components: { Navbar },
};
</script>

<style>

</style>
