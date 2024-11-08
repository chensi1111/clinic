<template>
  <div class="infoContainer">
    <div class="info">{{ props.info }}</div>
  </div>
</template>
<script setup lang="js">
const props = defineProps({
  info: {
    type: String,
    required: true,
  },
});
</script>
<style lang="css" scoped>
.infoContainer {
  min-height: 500px;
  margin-bottom: 100px;
  border: 2px solid gray;
  border-radius: 5px;
}
</style>
