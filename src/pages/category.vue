<template>
  <div class="category">
    <div class="topic">{{ categoryName }}</div>
    <div class="infos">
      <div class="navs">
        <div class="title">{{ categoryName }}</div>
        <div
          v-for="(nav, index) in nav1"
          :key="index"
          v-if="categoryName === '醫學美容'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
        <div
          v-for="(nav, index) in nav2"
          :key="index"
          v-if="categoryName === '再生醫學'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
        <div
          v-for="(nav, index) in nav3"
          :key="index"
          v-if="categoryName === '牙科類'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
        <div
          v-for="(nav, index) in nav4"
          :key="index"
          v-if="categoryName === '精準醫學'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
        <div
          v-for="(nav, index) in nav5"
          :key="index"
          v-if="categoryName === '生化檢測'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
        <div
          v-for="(nav, index) in nav6"
          :key="index"
          v-if="categoryName === '其他'"
        >
          <div class="nav" @click="toInfo(nav.path,nav.name)" :class="{ hover: currentInfo==nav.name }">{{ nav.name }}</div>
        </div>
      </div>
      <div class="navSelecter">
        <select v-model="navSelect">
      <option
        v-for="(nav, index) in filteredNavs"
        :key="index"
        :value="nav.path"
      >
        {{ nav.name }}
      </option>
    </select>
      </div>
      <div class="info"><RouterView></RouterView></div>
    </div>
  </div>
</template>
<script setup lang="js">
import { ref,computed,watch} from 'vue';
import { useRouter,useRoute } from 'vue-router';
const props = defineProps({
  id: {
    type: String,
    required: true,
  }
});
const categoryName=computed(()=>{
    return props.id
})

const nav1=ref([
    {name:'肉毒',path:'/category/醫學美容/肉毒'},
    {name:'玻尿酸',path:'/category/醫學美容/玻尿酸'},
    {name:'消脂針',path:'/category/醫學美容/消脂針'},
    {name:'美白針劑',path:'/category/醫學美容/美白針劑'},
    ])
const nav2=ref([
    {name:'抗衰老血液淨化',path:'/category/再生醫學/抗衰老血液淨化'},
    {name:'驚奇電音波',path:'/category/再生醫學/驚奇電音波'},
    {name:'外秘體',path:'/category/再生醫學/外秘體'},
    {name:'幹細胞',path:'/category/再生醫學/幹細胞'},
    ])
const nav3=ref([
    {name:'人工植牙',path:'/category/牙科類/人工植牙'},
    {name:'牙齒矯正',path:'/category/牙科類/牙齒矯正'}
    ])
const nav4=ref([
    {name:'精準化益生菌',path:'/category/精準醫學/精準化益生菌'},
    {name:'癌症風險指標 DR.70',path:'/category/精準醫學/癌症風險指標'}
    ])
const nav5=ref([
    {name:'各項檢測套組',path:'/category/生化檢測/各項檢測套組'},
    ])
const nav6=ref([
    {name:'其他',path:'/category/其他/其他'},
    ])

const route=useRoute()
const navSelect=ref()
const router =useRouter()
const toInfo=(route,name)=>{
    router.push({
        path:route
    })
    currentInfo.value=name

}
const currentInfo=ref()
watch(() => route.path, (newPath) => {
  const currentNav = [...nav1.value, ...nav2.value, ...nav3.value, ...nav4.value, ...nav5.value, ...nav6.value]
    .find(nav => nav.path === newPath);
  if (currentNav) {
    navSelect.value = currentNav.path; 
    currentInfo.value=currentNav.path.split("/")[3]
  }
}, { immediate: true }); 
watch(navSelect, (newValue) => {
  if (newValue) {
    router.push({ path: newValue });
  }
});
const filteredNavs = computed(() => {
  switch (categoryName.value) {
    case '醫學美容':
      return nav1.value;
    case '再生醫學':
      return nav2.value;
    case '牙科類':
      return nav3.value;
    case '精準醫學':
      return nav4.value;
    case '生化檢測':
      return nav5.value;
    case '其他':
      return nav6.value;
    default:
      return [];
  }
});

</script>
<style lang="css" scoped>
/* *{
    border: 1px solid red;
} */
.category {
  padding-top: 120px;
}
.topic {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  letter-spacing: 5px;
  font-weight: bold;
  background-color: rgb(197, 149, 126);
}
.infos {
  margin-top: 20px;
  display: flex;
  padding: 0 30px;
}
.navs {
  width: 20%;
  height: 500px;
  margin-right: 50px;
  border: 2px solid gray;
  border-radius: 4px;
}
.nav {
  font-size: 20px;
  margin: 10px;
  padding: 10px 5px;
  font-weight: 600;
}
.nav.hover{
  border-bottom: 2px solid gray;
}
.nav:hover {
  cursor: pointer;
  border-bottom: 2px solid gray;
}
.title {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: rgb(197, 149, 126);
}
.info {
  width: 80%;
}
.navSelecter{
  display: none;
}
@media screen and (max-width: 1200px) {
  .category {
    padding-top: 100px;
  }
}
@media screen and (max-width: 767px) {
  .topic{
    font-size: 35px;
  }
  .navs {
    display: none;
  }
  .infos {
    flex-direction: column;
  }
  .info {
    width: 100%;
  }
  select {
    width: 100%;
    height: 35px;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .navSelecter{
    display: block;
  }
}
@media screen and (max-width: 414px) {
  .category {
    padding-top: 80px;
  }
}
</style>
