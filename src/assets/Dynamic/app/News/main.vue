
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
    border:1px solid grey;
    width: 200px;
    top:0px;
    position: absolute;
    right: 0px;
    height: 400px;
    border-radius: 10px;
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



</style>

<template>
    <div class="newsContainer">

 
        <div class="newsItemsContainer">
         <newsItemComp v-for="n in newsp2" :postData="n" ></newsItemComp> 
        </div>
        <div class="newsAddOptionsContainer">
                <div class="addText">
                 Hello, please help SS by contributing some of your time and energy. Please Add a news article by filling in the form below.
                </div>

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
        <v-btn @click="addArticle()" style="background:#61B865;color:white;font-family: 'Roboto', sans-serif;" color="succjess">Add</v-btn>

                </div>          
        </div><!-- end of news add options-->

      
        </div><!-- end of news container-->
         
    </div>
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
        addArticle(){
            //method will push article to firestore
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

