
<style scoped>

.newsContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    flex-flow: column;
    
}

 
.newsAddOptionsContainer{
    width: 200px;
    top:0px;
    position: absolute;
    right: 0px;
    height: 100%;
     margin: 10px;
}
.addText{
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    color:grey;
    transition: all .5s;

}
.addText:hover{
    color:black;
}
.inputAddFormContainer{
    padding: 10px;
    overflow: auto;
    height: 290px;
 }

@media only screen and (max-width: 900px) {
     .newsContainer{
          margin:0px;
      }
      .newsAddOptionsContainer{
          display:none;
          
      }
      .newsItemsContainer{
           position: relative;
            display: flex;
           align-items: center;
           justify-content: center;
           flex-flow: column;
      }
      
}

.title{
    color:grey;
    margin-left: 20px;
    margin-top:10px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

}

.explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;

}
</style>

<template>
    <div class="newsContainer">

        <!--share news modal-->
  <b-modal ref="shareNews" hide-footer title="Share news @ legacynews Module">
    
    
                <div class="inputAddFormContainer">
  <v-text-field
      v-model="newsAdderValues.title"
        label="Title"
      required
    ></v-text-field>
      <v-text-field
      v-model="newsAdderValues.description"
        label="Description"
      required
    ></v-text-field>
      <v-text-field
      v-model="newsAdderValues.createdBy"
        label="Your Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="newsAdderValues.adderComment"
        label="Your Comment"
      required
    ></v-text-field>
      <v-text-field
      v-model="newsAdderValues.url"
        label="URL Source"
      required
    ></v-text-field>
     <v-text-field
      v-model="newsAdderValues.author"
        label="Author eg bbc news"
      required
    ></v-text-field>
      <v-text-field
      v-model="newsAdderValues.image"
        label="Image URL"
      required
    ></v-text-field>
        <v-btn @click="addArticle()" style="background:#61B865;color:white;font-family: 'Roboto', sans-serif;padding:0px;" color="succjess">Add</v-btn>

                </div> 
    </b-modal>

        <!-- share news model ends-->

 
    <div class="title">
                User generated news
            </div>
            <div class="explanation">
                Share news on this board, dicuss it via comments and learn something new.
            </div>
            <v-btn @click="shareNews()" style="padding:0px;font-family: 'Roboto', sans-serif;">Share some news</v-btn>

        <div class="newsItemsContainer">
          
         <newsItemComp v-for="n in newsp2" :postData="n" ></newsItemComp> 
       
        </div><!-- end of news items container-->
         
          

      
        </div><!-- end of news container-->
         
 </template>


<script>
import bigNewsItem from './bigNewsItem';
//import the bNewsitem to display bigger news
import newsItemComp from './newsItemComp';

import {db} from './../../../firestore.js';
//import the firebase database instance


export default {
    data:function(){
        return {
            
            newsAdderValues:{
                adderComment:'',
                author:'',
                createdBy:'',
                description:'',
                image:'',
                isEditable:false,
                lastEditedBy:'',
                title:'',
                url:''
            }
           
        }
        
    },components:{
        bigNewsItem,
        newsItemComp
    },firestore(){
        return {
            newsCollection:db.collection("NewsRelated").doc("userAddedArticles"),

            newsp2:db.collection("NewsRelated")
        }
    },computed:{
        reverseNews(){
            //computed reverse news takes the news coming from firestore and reverses it
             return this.newsCollection["articles"]
        }
    },methods:{
        shareNews(){
            this.$refs.shareNews.show();
        },
        addArticle(){
            //method will push article to firestore

            let adv= this.newsAdderValues;

            if(adv.title=="" || adv.author=="" || adv.createdBy=="" || adv.description==""
            ||adv.image=="" || adv.url==""){
                alert("please check all fields are filled");
                return ;
            }


            //TODO check all fields
            this.$firestore.newsp2.add({
                adderComment:this.newsAdderValues.adderComment,
                author:this.newsAdderValues.author,
                createdBy:this.newsAdderValues.createdBy,
                description:this.newsAdderValues.description,
                image:this.newsAdderValues.image,
                isEditable:false,
                lastEditedBy:this.newsAdderValues.createdBy,
                title:this.newsAdderValues.title,
                url:this.newsAdderValues.url,
            })
        }
    }
}
</script>

