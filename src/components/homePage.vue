<template>
  <div class="poster">
    <img src="../assets/poster.jpg" alt="" />
  </div>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <div class="info" @click="toPath(product.path)">
        <div class="name">{{ product.name }}</div>
        <div class="pic">
          <img :src="product.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import imageUrl from '../assets/fake.jpg';
const router=useRouter()
const products=ref([
  {name:'醫學美容',img:imageUrl,path:'/medical-beauty'},
  {name:'再生醫學',img:imageUrl,path:'/regenerative-medicine'},
  {name:'牙科類',img:imageUrl,path:'/dental'},
  {name:'精準醫學',img:imageUrl,path:'/precision-medicine'},
  {name:'生化檢測',img:imageUrl,path:'/biochemical'},
  {name:'其他',img:imageUrl,path:'/other' },
])
const toPath=(route)=>{
  router.push({
    path:route
  })
}
</script>
<style scoped>
.poster {
  display: flex;
  justify-content: center;
}
.products {
  padding: 20px 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}
.product {
  height: 300px;
  border: 2px solid gray;
  border-radius: 5px;
}
.product:hover{
  transform: translate(-5px,-5px);
  cursor: pointer;
}
.info{
  position: relative;
}
.name{
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
