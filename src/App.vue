<!--

 @author Daking123
  @date- 15/05/2018

  Comments-
  This is the home page, this will be fun

-->

<script>
export default {
  data:function(){
    return {

 
    }
  }
}
</script>

<!--PROGRAMMING LOGIC ABOVE-->

<template>
  <div class="main_container">
    Alpha 1.0
    <div class="advertisementleft">
     <p>Social station is a open source modular social media platform. If you want to participate by creating a module or understand the code please visit github by clicing <a target="_blank" href="https://github.com/Microsomes/SocialStation">here</a> Some rules:<router-link to="/rules">here</router-link></p>
    </div><!-- end of advertisementleft-->
    <div class="topBar">
      <router-link to="/"> 
      <div class="logo">
        <img  src="./assets/images/logos/logoOfficial.png"/>
       
      </div><!-- end of logo-->
      </router-link>
      <div class="logoText">
        <router-link style="color:black;text-decoration:none;font-size:14px;" to="/create/fact"> Create Fact:</router-link> &nbsp;<randomFact></randomFact>
      </div>
      <div class="goToFeedButton">
      <router-link to="/codeModule/feed">
        <v-btn style="background:#C62C2C;color:white;font-family: 'Roboto', sans-serif;">FEED</v-btn>
     </router-link> 
      </div>
      <div class="moduleSeacher">
        <input type="text" placeholder="search module to interact with. People vids polls etc..."/>
      </div>
      
    </div><!-- end of the top bar-->
    <animLiner></animLiner>

<div class="main_routing_content">
  <router-view></router-view>
</div>

<div class="recentModules">
  
</div>
 
 
  </div>
</template>

<!--StylesBelow-->

<style scoped>
.recentModules{
  position: fixed;
  background: #C62D2D;
  z-index: 10;
  top:60.9%;
  width: 100%;
  left: 0px;
  height: 250px;
      box-shadow: 5px -10px lightgoldenrodyellow;

}


.advertisementleft{
  position: fixed;
  left:10px;
  top:10px;
   width:170px;
  height:600px;
  display: flex;
  justify-content: center;
  padding-left:5px;
                font-family: 'Indie Flower', cursive;
 font-size: 25px;

 
}
 
 @media only screen and (max-width: 1200px) {
    .advertisementleft{
      display: none;
    }
}
.main_routing_content{
  border:1px solid lightgray;
  min-height:500px;
  border-radius: 5px;
}
.moduleSeacher{
   width:300px;
   position: relative;
   top:22px;
  margin: 10px;
  display: none;
}
 .moduleSeacher input[type="text"]{
    width:100%;
   height: 100%;
   border:none;
   outline:none;
   color:grey;
   
 }
.logoText{
  width:900px;
  display: flex;
  align-items: center;
  font-size:20px;
  font-family: 'Roboto', sans-serif;
  color:grey;
 }
.topBar{
  height:50px;
  display: flex;
}

.logo{
  width:100px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top:5px;
  transform: rotate(20deg);
}
.logo img{
  --logoAspectRatio: 70px; 
  width:var(--logoAspectRatio);
  height:var(--logoAspectRatio);
  cursor: pointer;
}
.logo img:hover{
  transform: scale(1.2);
}
 
.main_container{
  background: white;
  margin:0px;
  width:960px;
  margin:auto;
  height:100%;
}
</style>


 