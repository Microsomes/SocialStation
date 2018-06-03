<!--
@author Muhammed T Javed
@date 03/06/2018
-m will show the main user profile page
-->

<style scoped>

.profileContainer{
     border:1px solid grey;
     min-height: 500px;
     border-radius: 5px;
}
.profileTop{
    min-height:200px;
    background: #D35B5B;
    display: flex;
    align-items: center;
    color:white;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;

}
.profileImagecircleContainer{
     position: relative;
     height: 350px;
    width:350px;
    border-radius: 50%;
     display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    background: black;
    color:white;
    top:-50px;
        box-shadow: 5px 5px 5px #D35B5B;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
        background:#D35B5B;

    
}
.detailsContainer{
    height: 500px;
}

.detailsNav{
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    background:#D35B5B;
    padding:20px;
    color:white;
    position: relative;
    top:-40px;
}
.detailsNavItem{
    transition: all .2s;
}
.detailsNavItem:hover{
    cursor:pointer;
    color:black;
}

 
</style>

<template>
<div class="profileContainer">

<div class="profileTop">
    {{this.$store.state.authRelated.loginDetails.email}}
    
</div>
<div class="center">
    <div class="profileImagecircleContainer">
        <img height="100%" width="100%" style="border-radius:50%" src="https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&h=350"/>
    </div>
</div>
<!-- container for profile image ends here-->

<div class="detailsContainer">
    <div class="detailsNav">
        <div class="detailsNavItem">Brief info</div>
        <div class="detailsNavItem">Education</div>
        <div class="detailsNavItem">Interests</div>
        <div class="detailsNavItem">Friends</div>
        <div class="detailsNavItem">Followers</div>
    </div>
</div>

  
</div>

</template>

<script>

export default{
    data:function(){
        return {}
    }
}

</script>



