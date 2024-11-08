<template>
  <div class="container">
    <div class="topic">~如有以上需求請聯繫薛顧問~</div>
    <div class="info">
      <div class="clinic">
        <div class="name">聯醫未來時尚診所</div>
        <div class="name">United Medical Clinic</div>
      </div>
      <div class="contact">
        <div class="contactInfos">
          <div class="contactInfo">Line官方ID:@089pahin</div>
          <div class="contactInfo">電話:0982-852-438</div>
        </div>
        <div class="qrCode">
          <img src="../assets/qrCode.jpg" alt="" />
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1445622569017!2d121.2151897759244!3d24.96119574121823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823004062c523%3A0x6ff88981e5342bdc!2z6IGv6Yar5pyq5L6G5pmC5bCa6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1730967738227!5m2!1szh-TW!2stw"
          width="450"
          height="200"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script setup lang="js"></script>
<style lang="css" scoped>
/* * {
  border: 1px solid red;
} */
.container {
  height: fit-content;
  background-color: rgba(197, 149, 126, 0.7);
}
.topic {
  font-size: 20px;
  text-align: center;
  padding: 10px;
  letter-spacing: 3px;
  background-color: black;
  color: white;
  font-weight: bold;
}
.info {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.clinic,
.contact,
.map {
  width: 33%;
  height: 200px;
}
.clinic {
  font-style: italic;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name {
  font-family: Brush Script MT, Brush Script Std, cursive;
}
.contact {
  display: flex;
}
.contactInfos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
}
.contactInfo {
  font-size: 20px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  margin-bottom: 15px;
}
.qrCode {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
.map {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1200px) {
  .contactInfo {
    font-size: 18px;
  }
  .clinic {
    font-size: 30px;
  }
}
@media screen and (max-width: 1024px) {
  .map {
    display: none;
  }
  .clinic,
  .contact {
    width: 45%;
    height: 150px;
  }
}
@media screen and (max-width: 767px) {
  .info {
    flex-direction: column;
    align-items: center;
  }
  .clinic {
    width: 100%;
    height: 80px;
  }
  .contact {
    width: 80%;
  }
  .contact {
    justify-content: center;
  }
  .qrCode {
    width: 100px;
  }
}
@media screen and (max-width: 414px) {
  .contactInfo {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .topic {
    font-size: 18px;
  }
  .contact {
    width: 90%;
  }
}
</style>
