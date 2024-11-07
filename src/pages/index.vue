<template>
  <theHeader></theHeader>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
  <theFooter></theFooter>
</template>
<script setup lang="js">
import theHeader from '../components/theHeader.vue';
import theFooter from '../components/theFooter.vue';
</script>
<style scoped>
.wrapper {
  background-color: antiquewhite;
  min-height: 100vh; 
}
.poster {
  display: flex;
  justify-content: center;
}
</style>
