<template>
  <div class="poster">
    <img src="../assets/poster.jpg" alt="" />
  </div>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <div class="info" @click="toPath(product.path)">
        <div class="name">{{ product.name }}</div>
        <div class="pic">
          <img :src="product.img" alt="" />
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
  {name:'醫學美容',img:imageUrl,path:'/category/醫學美容'},
  {name:'再生醫學',img:imageUrl,path:'/category/再生醫學'},
  {name:'牙科類',img:imageUrl,path:'/category/牙科類'},
  {name:'精準醫學',img:imageUrl,path:'/category/精準醫學'},
  {name:'生化檢測',img:imageUrl,path:'/category/生化檢測'},
  {name:'其他',img:imageUrl,path:'/category/其他' },
])
const toPath=(route)=>{
  router.push({
    path:route
  })
}
</script>
<style scoped>
/* *{
  border: 1px solid red;
} */
.poster {
  display: flex;
  justify-content: center;
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;
}
.poster img {
  width: 100%;
}
.products {
  padding: 20px 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.product {
  height: 300px;
  border-radius: 5px;
}
.info {
  position: relative;
  display: flex;
  justify-content: center;
  
}
.name {
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
}
.pic{
  border: 2px solid gray;
  border-radius: 20px;
  overflow: hidden;
}
.pic:hover{
  cursor: pointer;
  border: 3px solid black;
}
.pic img{
  display: block;
  width: 100%;
}

@media screen and (max-width: 1200px) {
  .poster {
    padding-top: 100px;
  }
  .products {
    padding: 20px 100px;
    gap: 50px;
  }
}
@media screen and (max-width: 1024px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 80px;
    gap: 40px;
  }
}
@media screen and (max-width:767px){
  .products {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 100px;
    gap: 20px;
  }
  .product{
    height: 250px;
  }
}
@media screen and (max-width: 414px) {
  .poster {
    padding-top: 80px;
  }
  .products {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 30px 100px;
    gap: 80px;
  }
  .product{
    height: 200px;
  }
}
</style>
