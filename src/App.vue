<template>
  <div id="app">
    <div id="nav">
      <top-navbar></top-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNavbar from '@/components/TopNavbar.vue'

export default {
  components: {
    "top-navbar": TopNavbar
  }
};
</script>
