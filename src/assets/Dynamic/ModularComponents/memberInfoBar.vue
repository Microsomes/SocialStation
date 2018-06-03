<!--
@author Muhammed T Javed
@date 02/06/2018
- component shows the preview details of the currently signed up user
-->

<style scoped>
.mainInfoBar{
    height: 100%;
    background: lightgray;
    display: flex;
}
.searchContainer{
    height: 100%;
    width: 500px;
}
.searchContainer input[type="text"]{
    border:1px solid none;
    height: 100%;
    width: 100%;
    color:black;
    padding: 10px;
    outline:none;
}
.quickLinks{
    height: 100%;
    width: 200px;
}
.pannelButtons{
    width:240px;
    display: flex;
}
.userCircle{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
     text-transform: capitalize;
     background: #CD4545;
     color:white;

}
.signedinUserButtonContainer:hover{
    background: #CD4545;
    cursor: pointer;
    color:white;
    padding: 10px;
}
.signedinUserButtonContainer{
    display: flex;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    transition: all .5s;
    

}
.userCircleContainer{
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 10px;;
    
}
.userName{
    width:150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.panelItem:nth-child(1){
    border:none;
}
.panelItem{
    width:30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
}
.panelItem:hover{
    cursor:pointer;
    
}
.panelItem i{
    color:#CD4545;

}

</style>

<template>
<div class="mainInfoBar">
    <div class="searchContainer">
        <input title="search friends polls and other content" type="text" placeholder="search"/>
    </div>
    <div class="quickLinks">
        <div class="signedinUserButtonContainer">
            <div class="userCircleContainer">
                <div class="userCircle">
                    {{this.$store.state.authRelated.loginDetails.email[0]}}
                </div>
            </div>
            <div title="SS Bucks" class="userName">{{this.$store.state.authRelated.loginDetails.email}}</div>
         </div>
    </div>
    <div class="pannelButtons">
        <div class="panelItem"><!-- start of panel item-->
              <i title="friends requests" class="material-icons">supervisor_account</i>
        
        </div><!-- end of panel item-->
        <div class="panelItem"><!-- start of panel item-->
              <i title="messages" class="material-icons">message</i>
        </div><!-- end of panel item-->
              <div class="panelItem"><!-- start of panel item-->
              <i title="notifications" class="material-icons">notifications</i>
        </div><!-- end of panel item-->

         <div class="panelItem"><!-- start of panel item-->
              <i title=" global announcements" class="material-icons">info</i>
        </div><!-- end of panel item-->
        

    </div>
    <v-btn @click="Logout" style="background:#CD4545;color:white;font-family: 'Roboto', sans-serif;">Logout</v-btn>
</div>
</template>

<script>
import {auth} from './../../firestore.js';
export default{
    data:function(){
        return {}
    },methods:{
        Logout(){
            //logout method
            auth.signOut();
            this.$store.state.authRelated.isLoggedIn=false;
            //set  local state isLoggedIn to false
            console.log(this.$store.state.authRelated.isLoggedIn);

        }
    }
}
</script>