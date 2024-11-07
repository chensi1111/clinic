<template>
    <div class="topic">醫學美容</div>
    <div class="infos">
        <div class="navs">
            <div class="title">醫學美容</div>
            <div v-for="(nav,index) in navs" :key="index">
                <div class="nav">{{ nav.name }}</div>
            </div>
        </div>
        <div class="info"></div>
    </div>
</template>
<script setup lang="js">
import { ref } from 'vue';
const navs=ref([
    {name:'肉毒'},
    {name:'玻尿酸'},
    {name:'消脂針'},
    {name:'美白針劑'},
    ])
</script>
<style lang="css" scoped>
/* *{
    border: 1px solid red;
} */
.topic{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    letter-spacing: 5px;
    font-weight: bold;
    background-color: rgb(197,149,126);
}
.infos{
    margin-top: 20px;
    display: flex;
    padding: 0 30px;
}
.navs{
    width: 20%;
    height: 500px;
    margin-right: 50px;
    border: 2px solid gray;
    border-radius: 4px;
}
.nav{
    font-size: 20px;
    margin: 10px ;
    padding: 10px 5px;
    font-weight: 600;
}
.nav:hover{
    cursor: pointer;
    border-bottom: 2px solid gray;
}
.title{
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background-color: rgb(197,149,126);
}
.info{
    width: 80%;
    border: 2px solid gray;
    border-radius: 5px;
}
</style>