<template>
  <div class="container">
    <div class="logo" @click="toHome">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="navContainer">
      <div v-for="(nav, index) in navs" :key="index">
        <div class="nav" @click="toPath(nav.path)">{{ nav.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const navs = ref([
  { name: '首頁' ,path:'/'},
  { name: '最新消息',path:'/news' },
  { name: '醫學美容',path:'/medical-beauty' },
  { name: '再生醫學',path:'/regenerative-medicine' },
  { name: '牙科類',path:'/dental' },
  { name: '精準醫學',path:'/precision-medicine' },
  { name: '生化檢測',path:'/biochemical' },
  { name: '其他',path:'/other' },
  { name: '聯絡資訊',path:'/contact' }
  ]);
const toPath=(route)=>{
  router.push({
    path:route
  })
};
const toHome=()=>{
  router.push({
    path:'/'
  })
}
</script>
<style lang="css" scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: antiquewhite;
}
.logo {
  width: 100px;
  margin: 5px;
}
.logo:hover {
  cursor: pointer;
}
img {
  width: 100%;
}
.navContainer {
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
}
.nav {
  font-size: 25px;
  font-weight: bold;
}
.nav:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}
</style>
