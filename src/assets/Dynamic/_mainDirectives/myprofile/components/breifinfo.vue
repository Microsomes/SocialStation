
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
text-transform:capitalize;
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
                {{username}}
            </div>
            <div class="bio">
                {{bio}}
             </div>
            <div class="iconableInfo">
                <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">location_on</i></div>
                    <div class="text">{{location}}</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">link</i></div>
                    <div class="text"><a  target="_blank" href="#">{{website}}</a></div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">access_time</i></div>
                    <div class="text">{{joinedDay}}</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">pan_tool</i></div>
                    <div class="text">{{birthday}}</div>
                </div>
            </div>
            <div class="photosAndImagesContainer">
                 <div class="phototstitle">
                    <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">image</i></div>
                    <div class="text">Highlighted Pictures</div>
                </div>  
                <div class="photosContainer">
                    <div style="text-align:center;" v-if="highlightedImages==null">
                        You have no highlighted images, you can upload some by clicking the button below.
                        <v-btn style="padding:0px;font-family: 'Roboto', sans-serif;">Upload Highlighted Images</v-btn>
                    </div>
                    <div v-if="highlightedImages" v-for="n in highlightedImages" class="photoItem">
                        <img height="100%" width="100%" :src="n"/>
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
               <div style="padding:10px;" v-if="memorialWall==null">Add your thoughts desires ideas and goals here. This is your place to talk about you.</div>
               <!-- start of memorial item div-->
                <div v-if="memorialWall" v-for="n in memorialWall" class="memorialItem">
                    <!-- start of memorial left icon div-->
                    <div class="memorialLeftIcon">
                          <i class="material-icons">import_contacts</i>
                        <div style="font-size:10px;text-align:center;" class="explanation">
                            Created by: {{n.createdBy}}
                        </div>
                         <div style="font-size:10px;margin:-10px;text-align:center;" class="explanation">
                         {{n.timestamp}}
                        </div>
                    </div><!-- end of memorial left icon div-->
                    <!-- start of memorial right info div-->
                    <div class="memorailRightInfo">
                        <div class="explanation">
                            {{n.memorialText}}
                        </div>
                    </div><!-- end of memorial right info div-->
                </div><!-- end of memorial item-->
             </div><!--this is the end of the memorial items container-->
            
        </div><!-- end of memorail wall-->
        <div class="leftSideColumnContainerThird"><!-- third row column-->
        
 
            <div class="profileCompletion">
                <!-- <div class="title">
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
      </vue-circle> -->
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
            <div v-if="pinnedReads==null" class="title">Pinned Reads</div>
            <div style="text-align:center;display:flex;flex-flow:column" v-if="pinnedReads==null">
                You have no pinned reads you may pin something to read later by clicking the pin button below.
                <v-btn style="padding:0px;font-family: 'Roboto', sans-serif;">Pin read</v-btn>
            </div>
            <div v-if="pinnedReads" class="piggedReads">
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

                <div style="display:none" class="likedPeopleOverview">
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
            <!-- <div style="displat" class="explanation">
                _had enough fun for one day, you may sign out by clicking the button below. We hope to see you back on Social Station very soon.
            </div>
        <div @click="logout" class="editProfileButton">Sign out</div> -->

                    
                    

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
       },
      progress_end(event){
       },
      logout(){
           //logout method
            auth.signOut();
            this.$store.state.authRelated.isLoggedIn=false;
            //set  local state isLoggedIn to false
       }
    },components:{
        VueCircle,
        updateProfile
    },created(){
            window.scrollTo(0, 200);
    },computed:{
        username(){
            return this.$store.state.authRelated.loginDetails.profileMeta.username;
        },
        bio(){
            if(this.$store.state.authRelated.loginDetails.optionalAdditionalData.bio){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.optionalAdditionalData.bio;
            }else{
                //bio does not exit
                return "Please add a bio by clicking the edit profile button typing one in.";
            }
         },
         location(){
              if(this.$store.state.authRelated.loginDetails.optionalAdditionalData.location){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.optionalAdditionalData.location;
            }else{
                //bio does not exit
                return "Please add a location by clicking the edit profile button typing one in.";
            }
         },
         website(){
                if(this.$store.state.authRelated.loginDetails.optionalAdditionalData.website){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.optionalAdditionalData.website;
            }else{
                //bio does not exit
                return "Please add a website by clicking the edit profile button typing one in.";
            }
         },
         joinedDay(){
             var joined= this.$moment(this.$store.state.authRelated.loginDetails.optionalAdditionalData.joinedDay).fromNow();
             return "Joined "+joined;
         },
         birthday(){
              if(this.$store.state.authRelated.loginDetails.optionalAdditionalData.birthday){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.optionalAdditionalData.birthday;
            }else{
                //bio does not exit
                return "Please add your birthday by clicking the edit profile button typing one in.";
            }
         },
         highlightedImages(){
              if(this.$store.state.authRelated.loginDetails.optionalAdditionalData.highlightedImages){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.optionalAdditionalData.highlightedImages;
            }else{
                //bio does not exit
                return null;
            }
         },
         memorialWall(){
              if(this.$store.state.authRelated.loginDetails.extraInfo.memorial){
                //bio exists 
                return this.$store.state.authRelated.loginDetails.extraInfo.memorial;
            }else{
                //bio does not exit
                return null;
            }
         },
         pinnedReads(){
             if(this.$store.state.authRelated.loginDetails.extraInfo.pinnedReads){
                //bio exists 
                return null;
            }else{
                //bio does not exit
                return null;
            } 
         }
    }
}

</script>