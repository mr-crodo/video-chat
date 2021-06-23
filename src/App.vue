<template>
  <div id="app">
    <Navigation/>
    <router-view />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navigation
  }
};
</script>
<style lang="scss">
$primary: #5f2882;
//import bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
</style>
