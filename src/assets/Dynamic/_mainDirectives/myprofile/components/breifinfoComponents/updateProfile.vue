<!--
@author Muhammed T Javed
@date 06/06/2018
- this module updates the currently signed in users profile 
-->

<style scoped>
.updateProfileContainer{
    min-height:300px;
    width: 100%;
}
.title{
    color:grey;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}

.explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}

.textInput{
    border:1px solid lightblue;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin-top: 5px;
    outline:none;
}

.textarea{
    resize: none;
}
.updateProfileButtons{
background:#D35B5B;
border-radius:5px;
color:white;
font-family: 'Roboto', sans-serif;

}
</style>

<template>
<div class="updateProfileContainer">
    <div class="title">Edit Profile</div>
    <div class="explanation">_Full in all the data you feel comforable filling in. Its highly recommeneded that you fill in the entire form to have a more attractive profile.</div>
    
    <input class="textInput" type="text" v-model="values.fullName" placeholder="Your Full name"/>
    <input class="textInput" type="text" v-model="values.country" placeholder="Country,city"/>
    <textarea class="textInput textarea" v-model="values.bio" placeholder="bio"></textarea>
    <input class="textInput" type="text" v-model="values.website" placeholder="Your Website"/>
    <input class="textInput" type="text" v-model="values.birthday" placeholder="Birthday dd/mm/yyyy"/>
    <div class="explanation" style="margin:0px;padding-top:5px;padding-top:5px;">Upload a profile picture</div>
        <div style="text-align:center;color:grey;text-transform:capitalize">Leave fields blank if you don't want them updated.</div>

    <input @change="uploadPicture" type="file" accept="image/x-png,image/gif,image/jpeg" />
     <v-btn style="padding:0px;" @click="updateProfile();" class="updateProfileButtons" >Update</v-btn>
    <v-btn style="padding:0px;" @click="cancelUpdate();" class="updateProfileButtons">Cancel</v-btn>
    <em v-if="feedback">{{feedback}}</em>
</div>
</template>

<script>

 import {db} from './../../../../../firestore.js';
//import database to update valeus
import {storage} from './../../../../../firestore.js';
 // //import storage sdk to upload images to firebase

export default{
    data:function(){
        return {
            feedback:null,
            values:{
                fullName:'',
                country:'',
                bio:'',
                website:'',
                birthday:''
            }
        }
    },methods:{
        updateProfile(){
            this.feedback="Connecting to db";
            //method will connect to my server and update profile
            const useruid= this.$store.state.authRelated.loginDetails.profileMeta.uid;
            //user id needed to grab user reference

            //grab user reference
            var useref= db.collection("users").where("uid","==",useruid);

            if(this.values.fullName!=""){
                //update full name
                useref.get().then(doc=>{
                    doc.forEach(userdoc=>{
                        userdoc.ref.update({
                            "optionalAdditionalData.fullname":this.values.fullName
                        }).then(status=>{
                            this.feedback="name updated";
                        }).catch(err=>{
                        this.feedback="Error please try again. ";
                        })
                    })
                }).catch(err=>{
                    this.feedback="Error please try again. ";
                })
            }
            //the above logic is only for updating full name

            

            

         },cancelUpdate(){
            //sends canellation emit to its parent to close it
            this.$emit("cancel_profile_update","cancel");
        },
        uploadPicture(event){
            //method called when user uploads a picture
            var file= event.target.files[0];
            //grabs the profile picture the users adds
            
            const useruid= this.$store.state.authRelated.loginDetails.profileMeta.uid;
            //grab users profile id
            const userusername= this.$store.state.authRelated.loginDetails.profileMeta.username;
            //currently signed in users username

            //get a storage ref
            var profileref= storage.ref("user_profile_image/"+"profileimage"+userusername);
            this.feedback="uploading...";
            profileref.put(file).then(status=>{
                storage.ref(status.metadata.fullPath).getDownloadURL().then(url=>{
                   //once we get the file downloadable url of the user profile lets update it on the users record
                   this.feedback="Saving profile image to users record";
                
 
                this.feedback="adding image to users record";

                var userref= db.collection("users").where('uid','==',useruid);
                userref.get().then(user=>{
                    if(user.empty){
                        this.feedback="Please try signing in again.";
                    }else{
                        user.forEach(us=>{
                            us.ref.update({
                                "optionalAdditionalData.profileImage":url
                            }).then(sta=>{
                                this.feedback="Profile image added.";
                            }).catch(err=>{
                                this.feedback="Error please try uploading again.";
                            })
                        })
                    }
                }).catch(err=>{
                    this.feedback="Something went wrong please try again."
                })

               })
                this.feedback="success";
            }).catch(err=>{
                console.log(err);
                this.feedback="something went wrong. Please try again.";
            })
        }
    }
}
</script>