<template>
  <div class="container">
    <div class="logo" @click="toHome">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="navContainer">
      <div v-for="(nav, index) in navs" :key="index">
        <div class="nav" @click="toPath(nav.path,false)">{{ nav.name }}</div>
      </div>
    </div>
    <div class="icons">
      <font-awesome-icon
        :icon="['fas', 'house']"
        class="icon"
        @click="toHome"
      />
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="icon"
        @click="openMenu"
        v-show="!isMenuOpen"
      />
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="icon"
        @click="closeMenu"
        v-show="isMenuOpen"
      />
    </div>
    <div
      class="sideMenu"
      :class="{ menuOpen: isMenuOpen, menuClose: !isMenuOpen }"
    >
    <div v-for="(nav, index) in sideNavs" :key="index">
      <div class="sideNav" @click="toPath(nav.path,true)">{{ nav.name }}</div>
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
  { name: '醫學美容',path:'/category/醫學美容/肉毒' },
  { name: '再生醫學',path:'/category/再生醫學/抗衰老血液淨化' },
  { name: '牙科類',path:'/category/牙科類/人工植牙' },
  { name: '精準醫學',path:'/category/精準醫學/精準化益生菌' },
  { name: '生化檢測',path:'/category/生化檢測/各項檢測套組' },
  { name: '其他',path:'/category/其他/其他' },
  ]);
  const sideNavs=ref([
  { name: '最新消息',path:'/news' },
  { name: '醫學美容',path:'/category/醫學美容/肉毒' },
  { name: '再生醫學',path:'/category/再生醫學/抗衰老血液淨化' },
  { name: '牙科類',path:'/category/牙科類/人工植牙' },
  { name: '精準醫學',path:'/category/精準醫學/精準化益生菌' },
  { name: '生化檢測',path:'/category/生化檢測/各項檢測套組' },
  { name: '其他',path:'/category/其他/其他' },
  ])
const toPath=(route,option)=>{
  if(option){
    isMenuOpen.value=false
  }
  router.push({
    path:route
  })
};
const toHome=()=>{
  router.push({
    path:'/'
  })
}
const isMenuOpen=ref(false)
const openMenu=()=>{
  isMenuOpen.value=true
}
const closeMenu=()=>{
  isMenuOpen.value=false
}
</script>
<style lang="css" scoped>
.container {
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: antiquewhite;
  position: relative;
  position: fixed;
  z-index: 100;
  border-bottom: 1px solid gray;
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
  min-width: 70%;
  justify-content: space-evenly;
  align-items: center;
}
.nav {
  font-size: 25px;
  font-weight: bold;
  margin-right: 15px;
}
.nav:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}
.icons,
.sideMenu {
  display: none;
}
@media screen and (max-width: 1200px) {
  .container {
    height: 100px;
  }
  .logo {
    width: 80px;
  }
  .nav {
    font-size: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .navContainer {
    display: none;
  }
  .icons,
  .sideMenu {
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 40px;
    margin-left: 30px;
  }
  .sideMenu {
    position: fixed;
    width: 200px;
    height: fit-content;
    border: 1px solid gray;
    right: 0;
    top: 50vh;
    background-color: rgba(125, 125, 125, 0.9);
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  .sideNav{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
    text-shadow: 1px 1px black;
  }
  .sideNav:hover{
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  .menuOpen {
    transform: translate(0,-50%);
    transition: 0.5s;
  }

  .menuClose {
    transform: translate(100%,-50%);
    transition: 0.5s;
  }
  .icon:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 414px) {
  .container {
    height: 80px;
  }
  .sideMenu {
    top: 80px;
  }
  .logo {
    width: 60px;
  }
  .icon {
    font-size: 30px;
    margin-left: 20px;
  }
}
</style>
