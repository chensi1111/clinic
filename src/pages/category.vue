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
          v-if="categoryName === '預防醫學'"
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
        <div
          v-for="(nav, index) in nav7"
          :key="index"
          v-if="categoryName === '最新消息'"
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
    {name:'肉毒桿菌',path:'/category/醫學美容/肉毒桿菌'},
    {name:'玻尿酸',path:'/category/醫學美容/玻尿酸'},
    {name:'消脂針',path:'/category/醫學美容/消脂針'},
    {name:'美白針劑',path:'/category/醫學美容/美白針劑'},
    {name:'驚奇電音波V Shock',path:'/category/醫學美容/驚奇電音波V Shock'},
    {name:'膠原蛋白針劑',path:'/category/醫學美容/膠原蛋白針劑'},
    ])
const nav2=ref([
    {name:'PRP',path:'/category/再生醫學/PRP'},
    {name:'幹細胞',path:'/category/再生醫學/幹細胞'},
    {name:'粒線體',path:'/category/再生醫學/粒線體'},
    {name:'外泌體',path:'/category/再生醫學/外泌體'},
    ])
const nav3=ref([
    {name:'重覆經顱磁刺rTMS',path:'/category/預防醫學/重覆經顱磁刺rTMS'},
    {name:'靜脈雷射ILIB',path:'/category/預防醫學/靜脈雷射ILIB'},
    {name:'體外反搏裝置eecp',path:'/category/預防醫學/體外反搏裝置eecp'},
    {name:'抗衰老血液淨化”MCS+”',path:'/category/預防醫學/抗衰老血液淨化”MCS+”'},
    ])
const nav4=ref([
    {name:'癌症風險指標DR.70',path:'/category/精準醫學/癌症風險指標DR.70'},
    {name:'循環腫瘤細胞(CTCs)',path:'/category/精準醫學/循環腫瘤細胞(CTCs)'},
    {name:'CIK細胞療法',path:'/category/精準醫學/CIK細胞療法'},
    {name:'精準益生菌檢快篩檢測',path:'/category/精準醫學/精準益生菌檢快篩檢測'},
    ])
const nav5=ref([
    {name:'各項檢測套組',path:'/category/生化檢測/各項檢測套組'},
    ])
const nav6=ref([
    {name:'人工植牙',path:'/category/其他/人工植牙'},
    {name:'牙材服務',path:'/category/其他/牙材服務'},
    {name:'金融服務',path:'/category/其他/金融服務'},
    {name:'命理服務',path:'/category/其他/命理服務'},
    {name:'禮盒服務',path:'/category/其他/禮盒服務'},
    {name:'室內設計',path:'/category/其他/室內設計'},
    {name:'勞資糾紛',path:'/category/其他/勞資糾紛'},
    {name:'品牌設計',path:'/category/其他/品牌設計'},
    {name:'基因檢測',path:'/category/其他/基因檢測'},
    ])
const nav7=ref([
    {name:'益生菌新紀元',path:'/category/最新消息/益生菌新紀元'},
    {name:'好物推薦',path:'/category/最新消息/好物推薦'},
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
  const currentNav = [...nav1.value, ...nav2.value, ...nav3.value, ...nav4.value, ...nav5.value, ...nav6.value,...nav7.value]
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
    case '預防醫學':
      return nav3.value;
    case '精準醫學':
      return nav4.value;
    case '生化檢測':
      return nav5.value;
    case '其他':
      return nav6.value;
    case '最新消息':
      return nav7.value;
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
  min-height: 500px;
  margin-right: 50px;
  border: 2px solid gray;
  border-radius: 4px;
  margin-bottom: 20px;
}
.nav {
  font-size: 20px;
  margin: 10px;
  padding: 10px 5px;
  font-weight: 600;
  border-bottom: 2px solid transparent;
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
