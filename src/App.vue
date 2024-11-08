<template>
  <div id="app">
    <router-view></router-view>
    <ScrollTopButton></ScrollTopButton>
  </div>
</template>

<script>
import ScrollTopButton from './components/scrollTopButton.vue';
export default {
  name: 'App',
  components: {
    ScrollTopButton
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
}
</style>
