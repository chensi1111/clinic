<template>
    <div class="scroll" @click="scroll">
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </div>
</template>
<script setup lang="js">
const scroll = () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
}
</script>
<style scoped>
.scroll{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: rgb(197,149,126);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 20px;
    cursor: pointer;
}
</style>