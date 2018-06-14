<!--
@author Muhammed T Javed
@date 13/06/2018
-- add confession form
-->

<style scoped>
.addConfessionContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
 }
.title{
    color:grey;
    font-weight: bold;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    text-align: center;

}
.confessionformcon{
    display: flex;
    flex-flow: column;
    position: relative;
}
textarea{
       padding: 5px;
    background: #F2F2F2;
    margin: 5px;
    border-radius: 5px;
    outline:none;
    text-align: center;
    min-width: 300px;
    resize: none;
    min-height:100px;
}
.confessionformcon input[type="text"]{
     padding: 5px;
    background: #F2F2F2;
    margin: 5px;
    border-radius: 5px;
    outline:none;
    text-align: center;
    min-width: 300px;
}
.confessionForm{
    position: relative;
}
  .confessionformcon input[type="file"]{
        padding: 5px;
    background: #F2F2F2;
    margin: 5px;
    border-radius: 5px;
    outline:none;
    text-align: center;
    min-width: 300px;
    }

@media only screen and (max-width: 600px) {
    .addConfessionContainer{
         width:100%;
    }
    .confessionForm{
        width:100%;
        overflow: hidden;
     }
    .confessionformcon{
         width:100%;
    }
       
    .confessionformcon input[type="text"]{
        width:100%;
        margin:0px;
        margin-top:4px;
    }
    textarea{
        width:100%;
        margin:0px;
    }
}
.multiAddOption{
    position: absolute;
    right:0px;
}
.likeBlogEdit{
    border-bottom:1px solid grey;
    display: flex;
    flex-flow: column;
}
.uploadAnImage{
     padding: 10px;
}
.uploadAnImage i{
    color:#C62D2D;
}
</style>

<template>
<div class="addConfessionContainer">

    
    <div class="confessionForm">
        <div class="title">Create a Blog</div>
        <div class="confessionformcon">
              <!-- start of live edit-->
        <div class="likeBlogEdit" v-for="(n,index) in formDataToSubmit">
                <input  v-model="formDataToSubmit[index].title" type="text" placeholder="Title"/>
                <textarea v-model="formDataToSubmit[index].blogContents" type="text" placeholder="blog contents. Write whatever your heard desires"></textarea>
                <div v-for="(nn,ind)  in n.tags">
                    <input style="width:97%"  v-model="formDataToSubmit[index].tags[ind]" type="text" placeholder="edit tag"/>
                </div>

        </div><!-- end of live edit-->

        <input  v-model="title" type="text" placeholder="Title"/>
        <textarea v-model="blogContents" type="text" placeholder="blog contents. Write whatever your heard desires"></textarea>
        
        <div class="uploadAnImage">
            
            <div class="icon">
                  <i class="material-icons">broken_image</i>
            </div>
            Upload a footer image. Optional.
            <div><input @change="handleImage" type="file" accept="image/x-png,image/gif,image/jpeg"/></div>
        </div>

        <div v-for="(n,index) in tags">
                <input type="text" v-model="tags[index]" placeholder="type a tag then click tab"/>
        </div>
        <input v-on:keyup.enter="addTag" v-model="typing" type="text" placeholder="type a tag then click enter"/>
        
       

        <v-btn v-if="isMultiAdd==false" @click="addConfession()" style="padding:0px;font-family: 'Roboto', sans-serif;">Add Single</v-btn>
        <v-btn v-if="isMultiAdd" @click="addConfession()" style="padding:0px;font-family: 'Roboto', sans-serif;">Add All</v-btn>
        <v-btn @click="inputAnother()" style="padding:0px;font-family: 'Roboto', sans-serif;">or Input another first</v-btn>
        <em style="text-align:center;" v-if="feedback">{{feedback}}</em>
         </div>
     
    </div>
  
 </div>
</template>

<script>

import {db} from './../../../../firestore.js';
//import firebase database sdk
import slugify from 'slugify';
//import the slugify library

export default{
    data:function(){
        return {
            title:null,
            blogContents:null,
            feedback:null,
            tags:[],
            formDataToSubmit:[],
            typing:null,
            isMultiAdd:false,//determines which add blog button to show
            isImageAdded:false,//determines if user added an image
            imageFile:null
        
        }
    },methods:{
        addTag(){
            if(this.typing.length>=1){
                //their is something here
                 // //method that adds a tag
             this.tags.push(this.typing);
             this.typing="";
            }else{
                this.feedback="nothing in tags";
            }   
        },//end of add tag
        inputAnother(){
             this.feedback="Be sure to click add when done to save all.";
            //check if title blog contents are tags are all typed
            if(this.tags.length>=1 && this.title && this.blogContents){
                //all fields are fileld
                
                this.formDataToSubmit.push({
                    title:this.title,
                    blogContents:this.blogContents,
                    tags:this.tags
                 });

                this.isMultiAdd="Add All";
                //switch button to multimode
                this.title=null;
                this.blogContents=null;
                this.tags=[];

                if(this.isImageAdded){
                    this.feedback="The same image will be used for multiple posts";
                }
 

            }else{
                this.feedback="Not all fields are filled";
            }

        },
        addMultipleBlogs(){
            //method handles adding multple blogs
        },
        addSingle(){
            //method hadnles adding a single blog
        },
        handleImage(evt){
            this.feedback="Not all fields are filled";
            this.isImageAdded=true;
            //trigger because image is added
            this.imageFile= evt.target.files[0];
            
        }
    }
}

</script>