
<style scoped>
.ruleText{
        border-left: 2px solid grey;
        margin-top: 4px;
}
.ruleText:nth-child(even){
        border-left: 2px solid #C62D2D;
}
.ruleItem{
    height: 40px;
    display: flex;
    flex-flow: column;
}
.ruleText p{
    padding-left: 10px;
}
.disclaimer{
     padding: 10px;
     font-family: 'Roboto', sans-serif;
     font-size: 15px;

}
</style>


<template>
    <div>
       <p class="disclaimer"> These rules only apply to developers who would like to contribute to SS.<br> of course you are always welcome to fork SS and create your own version
       </p>
        <div class="ruleItem">
            
            <div class="ruleText"><p>1) Do not create modules related to Pornography</p></div>
            <div class="ruleText"><p>2) Do not create modules related to Child Pornography</p></div>
            <div class="ruleText"><p>3) Do not create modules related to anything illegal</p></div>
            <div class="ruleText"><p>4) Try to keep piracy to a minimum </p></div>
            <div class="ruleText"><p>5) Throughly Test Modules  </p></div>
            <div class="ruleText"><p>6) No spam  </p></div>
            <div class="ruleText"><p>7) Have fun contributing (: </p></div>
        </div>
    </div>
</template>
