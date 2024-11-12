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
import image1 from '../assets/醫學美容.jpg';
import image2 from '../assets/再生醫學.jpg';
import image3 from '../assets/預防醫學.jpg';
import image4 from '../assets/精準醫學.jpg';
import image5 from '../assets/生化檢測.jpg';
import image6 from '../assets/其他.jpg';

const router=useRouter()
const products=ref([
  {name:'醫學美容',img:image1,path:'/category/醫學美容/肉毒桿菌'},
  {name:'再生醫學',img:image2,path:'/category/再生醫學/PRP'},
  {name:'預防醫學',img:image3,path:'/category/預防醫學/重覆經顱磁刺rTMS'},
  {name:'精準醫學',img:image4,path:'/category/精準醫學/癌症風險指標DR.70'},
  {name:'生化檢測',img:image5,path:'/category/生化檢測/各項檢測套組'},
  {name:'其他',img:image6,path:'/category/其他/人工植牙' },
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
  color: white;
  text-shadow: 2px 2px black;
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
