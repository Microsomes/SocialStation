
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
    {{userPassedIn}}
            <div class="leftSide">
        <div class="infoContainer">
            <div class="profileName">
                    {{userPassedIn[0].username}}
               </div>
            <div class="bio">
              </div>
            <div class="iconableInfo">
                <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">location_on</i></div>
                 </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">link</i></div>
                    <div class="text"><a  target="_blank" href="#"></a></div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">access_time</i></div>
                    <div class="text">{{joinedDay}}</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">pan_tool</i></div>
                    <div class="text"></div>
                </div>
            </div>
            <div class="photosAndImagesContainer">
                 <div class="phototstitle">
                    <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">image</i></div>
                    <div class="text">Highlighted Pictures</div>
                </div>  
                <div class="photosContainer">
                    <div style="text-align:center;" >
                         This user does not have any highligted images, why not nudge them to.
                         <em v-if="uploadHighlightedImageFeedback">{{uploadHighlightedImageFeedback}}</em>
                    </div>
                    <div v-if="highlightedImages" v-for="n in highlightedImages" class="photoItem">
                        <img height="100%" width="100%" :src="n.hdata.link"/>
                    </div>
                   
                </div>
                 </div>
            </div>
        </div><!-- end of info container-->
       
        <div class="memoralWallContainer"><!-- start of memorial wall-->
            <div class="memoraiTitle">
                Memorial wall
             </div>
             
               <div style="color:greyfont-family: 'Roboto', sans-serif;" v-if="memorialState.feedback">{{memorialState.feedback}}</div>

             <div class="memorialItemsContainer">  <!-- this is the start of the memorial items container -->
               <div style="padding:10px;" v-if="memorialWall==null">This user doesn't have any memorial items to show, why not nudge them to add some.</div>
               <!-- start of memorial item div-->
                 <memorial_item_template v-for="n in memorialWallLocal" :data="n"></memorial_item_template>
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
         
        <!-- profile completion code is above-->
         
            <!-- pigged reads starts here-->
            <div v-if="pinnedReads==null" class="title">Pinned Reads</div>
            <div style="text-align:center;display:flex;flex-flow:column" v-if="pinnedReads==null">
                This user has no pinned reads, why not nudge them.
             </div>
             <div v-if="breifInfoState.isAddPinReadFormOpen" class="addPinnedReadForm">
                <addPinendRead @closePinForm="closePin"></addPinendRead>
            </div>
             <div v-if="pinnedReads" class="piggedReads">
                <div class="title">Pinned Reads</div>
                                <pinned_item_template v-for="n in localPinned"  :data="n"></pinned_item_template>

                 </div>

                 <!-- rendering pinned items-->
                
                           
                </div>
                <!-- pinned reads ends here-->
 

                
                        
           


            </div><!-- end of profile completion-->
             
            </div><!-- third row column ends-->

             

        </div><!-- end of left side-->
       
    </div>
     
</div>
</template>

<script>
 
import {db} from './../../../../firestore.js';
import {auth} from './../../../../firestore.js';
import {storage} from './../../../../firestore.js';
import VueCircle from 'vue2-circle-progress';
//imported the circle progress needed for the beief profile page

import updateProfile from './../../../_mainDirectives/myprofile/components/breifinfoComponents/updateProfile';
//imported the update profile ui
import addPinendRead from './../../../_mainDirectives/myprofile/components/breifinfoComponents/addPinnedReads';

import pinned_item_template from './../../../_mainDirectives/myprofile/components/breifinfoComponents/pinnedItem';
//imported the pinned item template

import memorial_item_template from './../../../_mainDirectives/myprofile/components/breifinfoComponents/memorialitem';

export default{
    data:function(){
        return {
            uploadHighlightedImageFeedback:null,
            localPinned:null,
            highlightedImagesLocal:null,
            memorialWallLocal:null,
            memorialState:{
                feedback:null,
                memorialtxt:null
            },
            breifInfoState:{
                isUpdateProfileOpen:false,
                isAddPinReadFormOpen:false,
            },
            profileTips:"Adding a name to your profile goes a long way. Additionally you may add a location, birthday, bio and a few highligted pictures of yourself.",
        fill : { gradient: ["#D35B5B", "grey", "grey"] },
        }
    },props:["userDetails"],
    methods:{
        grabAllHighlightedImages(){
            this.highlightedImagesLocal=[];
            //perpare to accet highlighed images local
        //method that grabs all highligted images
            const username= "microsomes";
            //persons usernam

            db.collection("users").where("username","==",username).get().then(userdocs=>{
                if(userdocs.empty){
                    //the user should
                }else{
                    userdocs.forEach(u=>{
                        var udata= u.data();
                        console.log("log log log");
                         u.ref.collection("highlightedImages").get().then(high=>{
                             if(high.empty){
                                 //no highligted images
                                 this.highlightedImagesLocal=null;
                             }else{
                            high.forEach(h=>{
                                var hdata= h.data();
                                console.log(hdata.link);
                                this.highlightedImagesLocal.push({
                                    hdata,
                                });
                            })
                             }
                         }).catch(err=>{
                             console.log("Error");
                         })
                    })
                }
            }).catch(err=>{
                console.log("Error please try again.");
                console.log(err);
            })

        },
        fileUploadProcess(file){
            const username= this.$store.state.authRelated.loginDetails.profileMeta.username;
            //persons username
             this.uploadHighlightedImageFeedback="Attempting to upload image";
            var fileSelected=file.target.files[0];

            //grab storage reference
            var highlightedImages = storage.ref("user_profile_image/"+"highlighted"+username+this.$moment().format());

            highlightedImages.put(fileSelected).then(sta=>{
                this.uploadHighlightedImageFeedback="Uploaded. Adding to DB now.";

                storage.ref(sta.metadata.fullPath).getDownloadURL().then(url=>{
                    
                    db.collection("users").where("username","==",username).get().then(users=>{
                    if(users.empty){
                        console.log("no users found");
                    }else{

                        var fullPath= sta.metadata.fullPath;
                        
                        //grab the highlighed image ref
                        users.forEach(u=>{
                            u.ref.collection("highlightedImages").add({
                                link:url,
                                fullPath:fullPath
                                
                            }).then(st=>{
                                this.uploadHighlightedImageFeedback="Success please refresh to see changes.";
                            }).catch(err=>{
                                this.uploadHighlightedImageFeedback="Error please try again";
                            })
                        })
                    }
                }).catch(err=>{
                    //error
                    this.uploadHighlightedImageFeedback="Error please try again.";
                })

                }).catch(err=>{
                    this.uploadHighlightedImageFeedback="...";
                })

               

            }).catch(err=>{
                console.log(err);
            })

            


            

        },
        grabAllMemorial(){
            this.memorialWallLocal=[];
            //prepare memorialwall for inputting data

            //grab all memorial items from the database
            const username= "microsomes";
            //persons username
            db.collection("users").where("username","==",username).get().then(us=>{
                if(us.empty){
                    //the user does not have any memoral records
                    this.$router.push("/");
                    // the user does not exist send them to the sign up page
                }else{
                    //memorial records exist
                    us.forEach(elemnt=>{
                        elemnt.ref.collection("memorialwall").get().then(mem=>{
                            mem.forEach(memo=>{
                                var memoItem= memo.data();
                                this.memorialWallLocal.push({
                                    memoItem,
                                });
                            })
                            console.log(this.memorialWallLocal);
                        }).catch(err=>{
                            console.log("error");
                        })
                    })
                }
            }).catch(err=>{
                console.log("error");
                console.log(err);
            })
        },
        grabAllPinnedReads(){
            //method will grab pinned reads
            const username= "microsomes";
            //persons username
        
            //grab users reference
            db.collection("users").where("username","==",username).get().then(res=>{
                    
                    if(res.empty){
                        //user does not exist log out now
                        this.$router.push("/");
                        //push user to sign up 
                    }else{
                        //prepare local pinned to start accepting data
                        this.localPinned=[];
                        //set up as an empty array
                        res.forEach(user=>{
                          var pinnedReadsRef=user.ref.collection("pinnedReads");
                          pinnedReadsRef.get().then(u=>{
                              if(u.empty){
                                  //no pinned reads
                              }else{
                                  //parse the pinned reads now
                                u.forEach(pin=>{
                                    var data= pin.data();
                                    this.localPinned.push({
                                        data,
                                    })
                                })

                              }
                          }).catch(err=>{

                              console.log(err);
                          })
                        })
                    }
                    
            }).catch(err=>{
                console.log("error grabbing users data");
            })

        },
        addMemorial(){
            //method used to handle adding a memorial
            //check if memorial text has been filled
            this.memorialState.feedback="Adding memorial to db";
         const useruid= this.$store.state.authRelated.loginDetails.profileMeta.uid;
        //user id needed to grab user reference
        //grab a user ref
        var userref= db.collection("users").where("uid","==",useruid);    
        
        userref.get().then(user=>{
            user.forEach(u=>{
                u.ref.collection("memorialwall").add({
                    memorailText:this.memorialState.memorialtxt,
                    timestamp:this.$moment().format()
                }).then(status=>{
                    this.memorialState.feedback="Memorial Added. Please refresh to see.";
                }).catch(err=>{
                    this.memorialState.feedback="Error please try again.";
                })
            })
        }).catch(err=>{
            this.memorialState.feedback="Error please try again.";
        })


        },
        closePin(){
            this.breifInfoState.isAddPinReadFormOpen=false;
        },
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
        updateProfile,
        addPinendRead,
        pinned_item_template,
        memorial_item_template
    },created(){
        this.grabAllPinnedReads();
        //grab pinned reads
        this.grabAllMemorial();
        //grab memorial wall items
        this.grabAllHighlightedImages();
        //grabs all highlighed images
     },computed:{
         userPassedIn(){
             return this.userDetails;
         },
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
              return null;
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
              if(this.highlightedImagesLocal){
                //bio exists 
                return this.highlightedImagesLocal;
            }else{
                //bio does not exit
                return null;
            }
         },
         memorialWall(){
               if(this.memorialWallLocal){
                //bio exists 
                return this.memorialWallLocal;
            }else{
                //bio does not exit
                return null;
            }
         },
         pinnedReads(){
             if(this.localPinned){
                //bio exists 
                return this.localPinned
            }else{
                //bio does not exit
                return null;
            } 
         }
    }
}

</script>