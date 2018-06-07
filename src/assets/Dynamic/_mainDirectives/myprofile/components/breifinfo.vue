
<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.infoContainer{
    width: 300px;
    min-height: 500px;
    border-radius: 5px;
    margin: 10px;
}
.profileName{
font-family: 'Roboto', sans-serif;
text-align: center;
font-size: 20px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
}
.bio{
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}
.inconableInfoItem i{
    color:black;
}
.inconableInfoItem{
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color:grey;
    letter-spacing: 1.5px;
    padding: 10px;
    padding-left:5px; 
}
.inconableInfoItem .text{
    margin-left: 20px;
}
.inconableInfoItem .text a{
    color:grey;
}
.photosAndImagesContainer{
    min-height: 300px;
    padding: 10px;
}
.photoItem{
    height: 90px;
    width: 90px;
    margin: 10px;
    transition: all .5s;
}
.photoItem:hover{
    cursor: pointer;
    background: #D35B5B;
    transform: scale(2.5);
    border:5px solid #D35B5B;
 }
.photosContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.leftSide{
    display: flex;
}
.memoralWallContainer{
    width: 600px;
    margin: 12px;
    border-radius: 5px;
}
.memoraiTitle{
    color:grey;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 10px;
}
.memorialSubline{
    padding: 10px;
    color:grey;
    font-family: 'Roboto', sans-serif;
    position: relative;
    top:-10px;
    left: 10px;
    text-transform: capitalize;
}
.typeSomething{
    height: 100px;
    width: 100%;
    padding: 10px;
}
.typeSomething input[type="text"]{
    width: 100%;
    height: 10%;
    padding: 10px;
    outline:none;
    border:1px solid grey;
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
        box-shadow: 5px 10px #D35B5B;

}
.typeSomething input[type="text"]:focus{
    height: 100%;
}
.leftSideColumnContainerThird{
    width: 250px;
}
.profileCompletion{
    border-radius: 5px;
    min-height: 250px;
     border-radius: 1px;
    margin-bottom: 10px;
    margin-top: 0px;
     
}
.profileCompletion .title{
    color:grey;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}
.progressionCircle{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    font-family: 'Roboto', sans-serif;

}
.profileCompletionTips{
        font-family: 'Roboto', sans-serif;
}
.profileCompletionTips{
    padding: 10px;
    min-height: 100px;
    color:grey;
    
}
.profiletext{
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
    color:grey;
    font-weight: bold;
}
.piggedReads{
    min-height: 200px;
     border-radius: 1px;
    margin-bottom: 10px;
    margin-top: 5px;
    padding:10px;
 }
.explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}

.editProfileContainer{
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    width: 90%;
}
.editProfileButton{
    background:#D35B5B;
    width: 80%;
    border-radius: 30px;
    padding: 10px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}
.editProfileButton:hover{
    cursor:pointer;
}

.pinnedItem{
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
.pinnedIcon{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pinnedIcon i{
    font-size: 50px;
    color:#D35B5B;
}
.pinnedTextContainer{
    width:200px;
    padding: 2px;
}
.pinnedTextContainer .pinnedText{
    color:grey;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
}
.pinnedPinnedBy{
    color:grey;
    position: relative;
    left: 5px;
}

.pinnedItem:hover{
    cursor: pointer;
    background: lightcyan;
    padding: 10px;
     
}
.likedPeopleOverview{
    border-radius: 1px;
     margin-top: 0px;
    padding:10px;

}
.updateProfileContainer{
    width: 100%;
}
.memorialItemsContainer{
    border:1px solid lightcyan;
    min-height: 3000px;
    border-radius: 5px;
}

.memorialItem{
    border:1px solid lightcyan;
    min-height:100px;
    border-radius: 5px;
    display: flex;
           transition: all .2s;

}
.memorialLeftIcon{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}
.memorialLeftIcon i{
    font-size: 50px;
    color:#D35B5B;
    transition: all .2s;
}
.memorialLeftIcon i:hover{
    cursor:pointer;
    color:black;
}
.memorailRightInfo{
    min-width: 100px;
    border-radius: 5px;
    min-height: 200px;

}
.memorialItem:hover{
       cursor:pointer;
       background:lightyellow;
       padding: 10px;
   }
@media only screen and (max-width:800px){
    .leftSide{
        flex-flow: column;
        justify-content: center;
        align-items: center;
        
    }
    .memoralWallContainer{
        width: 90%;
    }
    .infoContainer{
        width:90%;
    }
    .leftSideColumnContainerThird{
        width:90%;
    }
   .memorialItem{
       display: flex;
       flex-flow: column;
       align-items: center;
       justify-content: center;
       width: 100%;
       min-height: 300px;
   }
    
   
   .memorialItemsContainer{
       width: 100%;
       min-height: 300px;
    }
   
    
}
</style>


<template>
<div class="breifInfoContainer">
    <div class="leftSide">
        <div class="infoContainer">
            <div class="profileName">
                Muahmmed T Javed
            </div>
            <div class="bio">
                Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. 
            </div>
            <div class="iconableInfo">
                <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">location_on</i></div>
                    <div class="text">England,Birmingham</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">link</i></div>
                    <div class="text"><a  target="_blank" href="#">socialstation.io</a></div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">access_time</i></div>
                    <div class="text">Joined 25th June 2018</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">tag_faces</i></div>
                    <div class="text">Born on 6th Febuary 1998</div>
                </div>
            </div>
            <div class="photosAndImagesContainer">
                 <div class="phototstitle">
                    <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">image</i></div>
                    <div class="text">Highlighted Pictures</div>
                </div>  
                <div class="photosContainer">
                    <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                  
                </div>
                 </div>
            </div>
        </div><!-- end of info container-->
        <div class="memoralWallContainer"><!-- start of memorial wall-->
            <div class="memoraiTitle">
                Memorial wall
            </div>
            <div class="memorialSubline">How will people remember you about you die? Write down your dearest, important thoughts memories and ideas here. </div>
            <div class="typeSomething">
                <input type="text" placeholder="get typing... and push enter to submit"/>
                 
    
            </div><!-- end of type something-->

            <div class="memorialItemsContainer">  <!-- this is the start of the memorial items container -->
               
               <!-- start of memorial item div-->
                <div class="memorialItem">
                    <!-- start of memorial left icon div-->
                    <div class="memorialLeftIcon">
                          <i class="material-icons">import_contacts</i>
                        <div style="font-size:10px;text-align:center;" class="explanation">
                            Created by: Tayyab@gmail.com
                        </div>
                         <div style="font-size:10px;margin:-10px;text-align:center;" class="explanation">
                         1 hour ago
                        </div>
                    </div><!-- end of memorial left icon div-->
                    <!-- start of memorial right info div-->
                    <div class="memorailRightInfo">
                        <div class="explanation">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim ex at fringilla cursus. In nulla nunc, condimentum tincidunt pharetra quis, aliquet ac sapien. Sed quis cursus neque, sit amet feugiat turpis. Fusce congue dolor eros, eu consectetur dolor efficitur non. Aenean dui ex, egestas sit amet odio eget, fermentum lacinia magna. Nunc tempor massa ac libero semper sagittis. Donec dapibus, nulla at vulputate tempor, felis massa porttitor justo, ut pellentesque ante turpis eu odio. Phasellus odio lorem, auctor a dolor ornare, auctor laoreet neque. Nunc dignissim mi et tristique viverra. Curabitur pretium ex sed lorem ultricies, vitae ultricies leo fermentum. Donec euismod, eros vel condimentum posuere, lorem tortor viverra purus, vitae vestibulum est felis in eros. Pellentesque suscipit velit sed mi efficitur, vitae pretium ligula egestas. Morbi ut luctus diam, nec egestas lorem. Integer sollicitudin ante eget velit facilisis, sit amet feugiat eros pretium. Etiam bibendum fermentum quam. Vestibulum ut posuere ex.
                        </div>
                    </div><!-- end of memorial right info div-->
                </div><!-- end of memorial item-->
             </div><!--this is the end of the memorial items container-->
            
        </div><!-- end of memorail wall-->
        <div class="leftSideColumnContainerThird"><!-- third row column-->
        
 
            <div class="profileCompletion">
                <div class="title">
                    Profile Completion
                </div>
                <div class="progressionCircle">
                     <vue-circle
        :progress="10"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Completion</p>
      </vue-circle>
                </div>
             <div class="profiletext">Want to make your profile more attractive?</div>
            <div class="profileCompletionTips">{{profileTips}}</div>
            <div class="editProfileContainer">
                
                <div @click="breifInfoState.isUpdateProfileOpen=true" class="editProfileButton">Edit Profile</div>
                <div v-if="breifInfoState.isUpdateProfileOpen" class="updateProfileContainer">
                    <updateProfile @cancel_profile_update="handleOutsiders"></updateProfile>
                </div>
            </div>
        <!-- profile completion code is above-->
            <!-- pigged reads starts here-->
            <div class="piggedReads">
                <div class="title">Pinned Reads</div>
                <div class="explanation">Here you will be everyone who has pinned for you to read articles,websites, blogs or polls on Social Station. You can set who can pin your reads in your privacy setting. By default it is set to everyone.
                </div>
                <div class="pinnedItem"><!-- pinned items starts here-->
                    <div class="pinnedIcon">
                        
                          <i class="material-icons">book</i>
                    </div>
                    <div class="pinnedTextContainer">
                        <div class="pinnedText">Secrets of trading...</div>
                        <div class="pinnedPinnedBy">_pinned by Tayyab</div>
                         </div>
                </div><!-- pinned ends here-->
                            <div class="pinnedItem"><!-- pinned items starts here-->
                    <div class="pinnedIcon">
                        
                          <i class="material-icons">book</i>
                    </div>
                    <div class="pinnedTextContainer">
                        <div  class="pinnedText">Marriage Guide</div>
                        <div class="pinnedPinnedBy">_pinned by Tayyab</div>
                         </div>
                </div><!-- pinned ends here-->
                </div>
                <!-- pinned reads ends here-->

                <div class="likedPeopleOverview">
                    <div class="title">
                        People who liked you...
                    </div>
                    <div class="explanation">
                        _People who liked your profile will appear here.
                    </div>
                    <div class="pinnedItem"><!-- pinned items starts here-->
                    <div class="pinnedIcon">
                        
                          <i class="material-icons">favorite</i>
                    </div>
                    <div class="pinnedTextContainer">
                        <div  class="pinnedText">Taylor Liked you</div>
                        <div class="pinnedPinnedBy">_1 hour ago</div>
                    </div>
                    
                </div><!-- pinned ends here-->

                <div class="pinnedItem"><!-- pinned items starts here-->
                    <div class="pinnedIcon">
                        
                          <i class="material-icons">favorite</i>
                    </div>
                    <div class="pinnedTextContainer">
                        <div  class="pinnedText">Irtizas girl Liked you</div>
                        <div class="pinnedPinnedBy">_ 21 secs ago</div>
                    </div>
                    
                </div><!-- pinned ends here-->
            <div class="explanation">
                _had enough fun for one day, you may sign out by clicking the button below. We hope to see you back on Social Station very soon.
            </div>
        <div @click="logout" class="editProfileButton">Sign out</div>

                    
                    

                 </div><!-- liked people overview ends here-->


            </div><!-- end of profile completion-->
             
            </div><!-- third row column ends-->

             

        </div><!-- end of left side-->
       
    </div>
     
</div>
</template>

<script>
 
import {auth} from './../../../../firestore.js';
import VueCircle from 'vue2-circle-progress';
//imported the circle progress needed for the beief profile page

import updateProfile from './breifinfoComponents/updateProfile';
//imported the update profile ui

export default{
    data:function(){
        return {
            breifInfoState:{
                isUpdateProfileOpen:false
            },
            profileTips:"Adding a name to your profile goes a long way. Additionally you may add a location, birthday, bio and a few highligted pictures of yourself.",
        fill : { gradient: ["#D35B5B", "grey", "grey"] },
        }
    },
    methods:{
        handleOutsiders(evt){
            //listens and handles all emits from its child components
            const home = this;
            //reference to the current export default object
            switch(evt){
                case "cancel":
                home.breifInfoState.isUpdateProfileOpen=false;
                //close the update profile page
                break;
            };
        },
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      },
      logout(){
           //logout method
            auth.signOut();
            this.$store.state.authRelated.isLoggedIn=false;
            //set  local state isLoggedIn to false
            console.log(this.$store.state.authRelated.isLoggedIn);
      }
    },components:{
        VueCircle,
        updateProfile
    },created(){
            window.scrollTo(0, 200);
    }
}

</script>