 <style scoped>
 .createCont{
     background: red;
     min-height: 500px;
     display: flex;   
     font-family: 'Roboto', sans-serif;

 }
 .createCont div{
     width:50%;  
 }
 .left{
     background: white;
     padding:10px;
     font-family: 'Roboto', sans-serif;
    font-size: 15px;
 }
 .right{
     background: lightgoldenrodyellow;
 }
 </style>
 
 <template>
     <div class="createCont">
         <div class="left">
             <p>Hey their, you have landed on the create module. Here you are able to create content on the left depending on which link you clicked you will be able to add content to SS.</p>
             <p>Enjoy creating content and thank you for adding value to SS.</p>
         </div>
         <div class="right">
             <router-view style="width:87%;height:70%;"></router-view>
         </div>
     </div>
 </template>
 