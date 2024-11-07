<template>
    <div class="container">
        <div class="topic">~如有以上需求請聯繫薛顧問~</div>
        <div class="info">
            <div class="clinic">
                <div class="name">聯醫未來時尚美學診所</div>
                <div class="name">United Medical Clinic</div>
            </div>
            <div class="contact">
                <div class="contactInfos">
                    <div class="contactInfo">Line官方ID:@089pahin</div>
                    <div class="contactInfo">電話:0982-852-438</div>
                </div>
                <div class="qrCode"></div>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1445622569017!2d121.2151897759244!3d24.96119574121823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823004062c523%3A0x6ff88981e5342bdc!2z6IGv6Yar5pyq5L6G5pmC5bCa6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1730967738227!5m2!1szh-TW!2stw" width="450" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
    </div>
</template>
<script setup lang="js"></script>
<style lang="css" scoped>
/* *{
    border: 1px solid red;
} */
.container{
    height: 300px;
    background-color: rgba(197,149,126,0.7);
}
.topic{
    font-size: 20px;
    text-align: center;
    padding: 10px;
    letter-spacing: 3px;
    background-color: black;
    color: white;
    font-weight: bold;
}
.info{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.clinic,.contact,.map{
    width: 30%;
    height: 200px;
}
.clinic{
    font-style: italic;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.name{
    font-family: Brush Script MT, Brush Script Std, cursive;
}
.contact{
    display: flex;
}
.contactInfos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
.contactInfo{
    font-size: 20px;
    display: flex;
    padding-left: 20px;
    align-items: center;
    margin-bottom: 15px;
}
.map{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>