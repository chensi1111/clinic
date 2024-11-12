<template>
  <div class="infoContainer">
    <div v-if="filteredInfo" class="infos">
      <div class="infoName">{{ filteredInfo.name }}</div>
      <div class="infoIntro" v-html="filteredInfo.introduce"></div>
      <div class="infoPro">{{ filteredInfo.produce }}</div>
      <div class="img"><img :src="filteredInfo.img" alt=""></div>
      <div class="downloadContainer" v-if="downloadFile">
        <div class="downloadMsg">點擊下載 : </div>
        <a class="download"  :href="downloadFile" download>{{ filteredInfo.name }}</a>
      </div>
    </div>
    <div v-else class="infos">找不到相關資料</div>
    <div v-if="props.id === '其他'" class="contactInfoContainer">
      <div class="contactTopic">~如有以上需求請聯繫JEFF SHAY~</div>
      <div class="contactInfos">
        <div class="contactInfo">LineID: jeffshay</div>
        <div class="contactInfo">電話:0925-068-375</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import { ref,computed } from 'vue';
import img1 from '../assets/體外反搏裝置eecp.jpg'
import img2 from '../assets/PRP.jpg'
import img3 from '../assets/各項檢測套組.jpg'
import img4 from '../assets/精準益生菌檢快篩檢測.jpg'
import img5 from '../assets/最新消息.jpg'
const props = defineProps({
  id:{
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});
const news=ref([
  {name:'益生菌新紀元',img:img5},
  ])
const cata1=ref([
  {name:'肉毒桿菌',introduce:'放鬆肌肉、改善皺紋，打造小臉線條。',produce:'(皇家、天使、BOTOX)'},
  {name:'玻尿酸',introduce:'具有強力的吸水性，可保持肌膚彈性、鎖住肌膚中的水份，堆疊產生的細膩層次中，雕塑出立體、優雅的肌膚輪廓。',produce:'(高德美、喬雅登、晶亮瓷、V18長效)'},
  {name:'膠原蛋白針劑',introduce:'撫平皺紋或塑造臉部輪廓。。',produce:'(熊貓針、膠原蛋白、洢蓮絲、精靈針、4D童顏針)'},
  {name:'消脂針',introduce:'是利用一種非動物性合成的純化脫氧膽酸，可將脂肪破壞後由人體自然代謝。',produce:'(倍克脂、善纖達、易週糖、3合一甩油點滴)'},
  {name:'驚奇電音波V Shock',introduce:`衛福部核准的溫倍驚奇電波系統和晶準極限超音波治療儀(俗稱 : V Shock驚奇電音)結合了「單極電波」和「音波」的突破性科技，開啟新時代醫學美容的概念。<br>V Shock驚奇電音波通過電波與音波的協同作用，同步輸出單極電波RF與音波拉提，首創全球醫美電音四重拉提，多層次拉提一次到位，能針對臉部拉提、頦下拉提、緊實臉部與身體肌膚及改善皺紋等效果，達成人人嚮往的精緻 V 臉。`},
  {name:'美白針劑',introduce:'改善皮膚黯沈、斑點和痘疤，美白針一打下去是全身都可以美白，就連對身上的疤痕也可以有淡化的效果。',produce:'(美白BB針、貴婦回春點滴、新逆齡時光點滴)'},
  ])
const cata2=ref([
  {name:'重覆經顱磁刺rTMS',introduce:`一種不需手術，非侵入性，幾乎無痛感的腦部儀器治療。<br>目的是治療對藥物反應不佳或不適應藥物副作用的成人重度憂鬱症。<br>治療為透過磁生電的物理特性，利用磁場所產生的電流來刺激或抑制腦部的活動，例如刺激重度憂鬱症患者的大腦左側額葉，來增進額葉調控情緒的功能。`},
  {name:'靜脈雷射ILIB',introduce:`氦氖雷射系統為透過光纖，傳導雷射光，減輕疼痛，舒緩皮膚不適。<br>氦氖雷射光纖針，為雷射光源器材，用於輸出雷射光源。`},
  {name:'體外反搏裝置eecp',introduce:'EECP體外反搏是一種非侵入性的治療，以特製充氣囊套配合使用者之心電圖，與心跳收縮/舒張，同步做反向的下肢擠壓。',img:img1},
  {name:'抗衰老血液淨化”MCS+”',introduce:`本產品以離心原理自動分離術並收集血液成分，包括血小板、紅血球、幹細胞以及可能用作輸血治療的血漿。<br>收集的血漿可被保留並再處理為血漿衍生製品。`},
  ])
const cata3=ref([
  {name:'PRP',introduce:`PRP(platelet-rich plasma)又稱高濃度血小板血漿，是增生治療的一種。是抽自己的血液，離心後抽出其生長因子，利用自身的多種生長因子，注射到患處，來促進血管新生以及組織修復與再生。<br>對於組織的修復會比傳統復健或藥物來的更快更有效。`,img:img2},
  {name:'幹細胞',introduce:`幹細胞有助於修復、新生、抗衰老，一般治療可以透過施打幹細胞，提升身體機能，修復老化細胞，達到保養功能；癌症治療透過幹細胞分化以訓練完成的免疫細胞，增強患者免疫細胞對抗癌細胞或受病毒感染的能力；<br>應用在藥物測試上，則能夠利用儲存的幹細胞測試藥物反應、累積臨床反應，有效運用在各項疾病療程規劃。`},
  {name:'粒線體',introduce:`粒線體被稱為細胞的「發電廠」，它們在我們體內每個細胞中發揮著至關重要的作用。<br>了解粒線體的功能和它們對健康的重要性，可以幫助我們更好地維持健康生活。`},
  {name:'外泌體',introduce:`是幹細胞所分泌的一種特殊雙脂質膜活性囊泡，介於50奈米（nm）到150奈米之間，是一種非常小的分子顆粒。<br>具有修復組織、活化細胞等能力，逐漸獲得關注。`},
  ])
const cata4=ref([
  {name:'癌症風險指標DR.70',introduce:'(Onko-Sure)檢測FDP濃度評估範圍：肺癌、肝癌、乳癌、胃癌、大腸癌、直腸癌、胰臟癌、子宮頸癌、卵巢癌、口腔癌、前列腺癌、食道癌、膀胱癌、腦癌、血癌、惡性淋巴瘤、子宮癌、甲狀腺癌、滋養層細胞癌…等上皮層癌細胞濃度評估'},
  {name:'循環腫瘤細胞(CTCs)',introduce:`從原發性腫瘤脫落並進入血液中循環或是淋巴中的細胞。循環腫瘤細胞像種子般散播，當遇到適當的生⾧環境便會萌芽發展(腫瘤轉移)，並在新的位置增生出新的腫瘤。<br>這種具有侵入性、轉移的細胞為惡性腫瘤細胞。`},
  {name:'CIK細胞療法',introduce:`CIK是一種特殊免疫細胞群，為T細胞、NK-T細胞和NK細胞的不同細胞族群組合而成，高度安全、對MHC(主要組織相容性複合體)分子無限制且具有抗腫瘤活性，能改善免疫系統、提高免疫力，尤其對手術後或放化療後患者效果顯著，能消除殘留微小的轉移病灶，防止癌細胞擴散和復發。<br>臨床研究證實CIK細胞應用於癌症藥物合併治療具明顯療效。`},
  {name:'精準益生菌檢快篩檢測',introduce:'經檢測得知目前體內菌叢裝況，作為調理與改善體的依據並客制化補充相對應的益生菌來改善腸道菌群， 以調理生理狀況或降低罹病風險。',img:img4},
  ])
const cata5=ref([
  {name:'各項檢測套組',img:img3},
 ])
const cata6=ref([
  {name:'人工植牙',introduce:'推薦優質牙醫診所植牙規劃諮詢'},
  {name:'牙材服務',introduce:'(PRP+外秘體)、(歐美植體)、跟刀服務'},
  {name:'金融服務',introduce:'個人境外保單、法人資產規劃移轉、信託、海外移民'},
  {name:'命理服務',introduce:'姓名學命理分析及公司行號命名'},
  {name:'禮盒服務',introduce:'香腸禮盒、紅酒威士忌禮盒'},
  {name:'室內設計',introduce:'設計裝潢施工一條龍'},
  {name:'勞資糾紛',introduce:'提供院所勞資糾紛問題解決平台服務'},
  {name:'品牌設計',introduce:'提供品牌設計相關服務'},
  {name:'基因檢測',introduce:'NIFTY胎兒非侵入性基因檢測、癌症基因檢測'},
  ])
const filteredInfo = computed(() => {
  if (props.id === '醫學美容') {
    return cata1.value.find(item => item.name === props.info);
  }else if(props.id === '預防醫學'){
    return cata2.value.find(item => item.name === props.info);
  }else if(props.id === '再生醫學'){
    return cata3.value.find(item => item.name === props.info);
  }else if(props.id === '精準醫學'){
    return cata4.value.find(item => item.name === props.info);
  }else if(props.id === '生化檢測'){
    return cata5.value.find(item => item.name === props.info);
  }else if(props.id === '其他'){
    return cata6.value.find(item => item.name === props.info);
  }else if(props.id === '最新消息'){
    return news.value.find(item => item.name === props.info);
  }
  return null;
});
const downloadFile=computed(()=>{
  if(props.info==='驚奇電音波V Shock'){
    return './驚奇電音波V Shock.pdf'
  }else if(props.info==='抗衰老血液淨化”MCS+”'){
  return './抗衰老血液淨化”MCS+”.pdf'
}else if(props.info==='外泌體'){
  return './外泌體.pdf'
}else if(props.info==='循環腫瘤細胞(CTCs)'){
  return './循環腫瘤細胞(CTCs).pdf'
}else if(props.info==='精準益生菌檢快篩檢測'){
  return './精準益生菌檢快篩檢測.pdf'
}
return null
})
</script>
<style lang="css" scoped>
.infoContainer {
  min-height: 600px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 15px;
  position: relative;
}
.infos {
  display: flex;
  flex-direction: column;
}
.infoName {
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.infoIntro {
  font-size: 22px;
  margin-bottom: 10px;
}
.infoPro {
  font-size: 20px;
  color: rgb(196, 71, 13);
}
.contactInfoContainer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
}
.contactTopic {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
.contactInfos {
  display: flex;
}
.contactInfo {
  margin-right: 15px;
  font-size: 18px;
}
.downloadContainer{
  display: flex;
}
.downloadMsg{
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
}
.download{
  font-size: 18px;
}
a{
  color: black;
}
.img{
  width: 100%;
}
img{
  width: 100%;
}
@media screen and (max-width:767px){
  .infoContainer{
    min-height: 300px;
  }
  .infoIntro {
  font-size: 20px;
}
  .contactTopic{
    font-size: 18px;
  }
  .contactInfo{
    font-size: 16px;
  }
}
@media screen and (max-width:414px){
  
  .infoName{
    font-size: 20px;
  }
  .infoIntro {
  font-size: 16px;
}
  .contactTopic{
    font-size: 16px;
  }
  .contactInfo{
    font-size: 14px;
  }
}
</style>
