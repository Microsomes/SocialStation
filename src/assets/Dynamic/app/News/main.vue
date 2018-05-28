<!--
Author Muhammed T Javed
data 26/05/2018
- this module shows most popular news by the top news agencies
 -->


<style scoped>
.newsContainer{
    display: flex;
    width:960px;
    flex-wrap: wrap;

}

.newsItem{
    margin: 10px;
    border:1px solid lightslategray;
    width:450px;
    min-height: 150px;
    border-radius: 5px;
}
.topImage{
     height: 200px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    position: relative;

}
.newsTitle{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 30px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    transition: all .5s;
   
     height: 100px;
    

}
.readMore{
    position: absolute;
    top:72px;
    right: 0px;
    font-size: 12px;

}
.readMoreBut{
    height: 20px;
    width: 20px;
    margin: 0px;
 
}

.newsStatus{
    height: 20px;
    display: flex;
    align-items: center;
    color: grey;
    padding: 20px;
 }
 .addArticleContainer{
     min-height: 300px;
     border-radius: 5px;
     padding: 10px;
     width: 99%;
     margin: auto;
 }
 .addArticleContainer h2{
     color:grey;
     padding: 5px;
     font-family: 'Roboto', sans-serif;
 }
.userAddedNews h2{
    color:grey;
    padding: 10px;
}
</style>

<template>
<div>
     <div class="newsStatus">
        {{newsStatus}}
    </div>
        <v-btn @click="openArticleAdderForm()" style="background:#C52B2B;color:white;font-family: 'Roboto', sans-serif;">Add News Article</v-btn>
        <div v-if="localState.showAddArticle" class="addArticleContainer"><!-- start of add an article-->
            <h2>Add an News Article</h2>
            <v-form style="padding:10px;" v-model="valid">
    <v-text-field
      v-model="localState.addArticleValues.title"
      :rules="nameRules"
      :counter="50"
      label="Title"
      required
    ></v-text-field>
    <v-text-field
      v-model="localState.addArticleValues.author"
      :rules="emailRules"
      label="Author"
      required
    ></v-text-field>
     <v-text-field
      v-model="localState.addArticleValues.description"
      :rules="emailRules"
      label="Description"
      required
    ></v-text-field>

     <v-text-field
      v-model="localState.addArticleValues.imageURL"
      :rules="emailRules"
      label="Image URL"
      required
    ></v-text-field>
     <v-text-field
      v-model="localState.addArticleValues.sourceURL"
      :rules="emailRules"
      label="Source URL"
      required
    ></v-text-field>
        <v-btn @click="addArticle()"  style="background:#4BB543;color:white;font-family: 'Roboto', sans-serif;">Add</v-btn>
        <v-btn @click="cancelAddingArticle()"  style="background:#CC4444;color:white;font-family: 'Roboto', sans-serif;">Cancel</v-btn>
 
  </v-form>
        </div><!-- end of add an article-->
        <div class="userAddedNews">
            <h2>User Added News</h2>
    <div class="newsContainer">
        
        <div v-for="n in reverseUserGeneratedArticles" class="newsItem">
            <div class="topImage">
                <img height="100%;" width="100%" v-bind:src="n.image"/>
                 <div class="readMore">
                    <a target='_blank' v-bind:href="n.url"><v-btn class="readMoreBut" style="background:grey;color:white;font-family: 'Roboto', sans-serif;">Read</v-btn>
                    </a>
                </div>
            </div>
            <div class="newsTitle">
                {{n.title}}
            </div>
        </div>
    </div>
        </div><!-- end of user added news-->

         <div class="userAddedNews">
            <h2>Top News from popular sources</h2>
    <div class="newsContainer">
        
        <div v-for="n in newsFromNewsAPI" class="newsItem">
            <div class="topImage">
                <img height="100%;" width="100%" v-bind:src="n.img"/>
                 <div class="readMore">
                    <a target='_blank' v-bind:href="n.url"><v-btn class="readMoreBut" style="background:grey;color:white;font-family: 'Roboto', sans-serif;">Read</v-btn>
                    </a>
                </div>
            </div>
            <div class="newsTitle">
                {{n.title}}
            </div>
        </div>
    </div>
        </div><!-- end of user added news-->

    </div>

</template>

<script>

import {newsReference} from './../../../../assets/firebase.js';

import {db} from './../../../../assets/firebase.js';

let metsRef= db.ref('/news/mets/totalArticles');

export default {
    data:function(){
        return{
            newsFromNewsAPI:[
                 
                ],
            name:'tayyab',
            articles:newsReference,
            
            localState:{
                showAddArticle:false,
                addArticleValues:{
                    title:'',
                    author:'',
                    description:'',
                    imageURL:'',
                    sourceURL:''
                }
            },
            newsStatus:'Showing top news from all sources',
            newsItems:[
                "one",
                "two",
                "three",
                "four",
                "five",
                "six"
            ],
        }
    },created(){
        // news.push({
        //     author:"BBC News",
        //     description:"taylor is smart",
        //     image:"google.com",
        //     title:"Taylor is smart",
        //     url:"google.com"
        // })
        this.grabNewsFromSource("bbc-news");
        this.grabNewsFromSource("abc-news");
        this.grabNewsFromSource("bbc-sport");
        this.grabNewsFromSource("buzzfeed");
        this.grabNewsFromSource("cnn");
        this.grabNewsFromSource("espn");
        //grab all news from popular sources
     },
    firebase:function(){
        return {
            newsArticles: db.ref("news/articles/userAdded")
        }
    },
    computed:{
        reverseUserGeneratedArticles(){
            return this.newsArticles.reverse() 
        }
    },methods:{
        cancelAddingArticle(){
            //method changes the local state to hide the add article form
            this.localState.showAddArticle=false;
        },
        openArticleAdderForm(){
            //method changes the local state to show the add article form
            this.localState.showAddArticle=true;
        },
        addArticle(){
            //TODO check if all the fields are in full

            if(this.localState.addArticleValues.title=="" ||
            this.localState.addArticleValues.author=="" ||
            this.localState.addArticleValues.description==""||
            this.localState.addArticleValues.imageURL==""||
            this.localState.addArticleValues.sourceURL==""
            ){
                alert("enter all fields");
                return;
            }
            
            newsReference.push({
            author:this.localState.addArticleValues.author,
            description:this.localState.addArticleValues.description,
            image:this.localState.addArticleValues.imageURL,
            title:this.localState.addArticleValues.title,
            url:this.localState.addArticleValues.sourceURL
            });
            this.localState.showAddArticle=false;
            this.localState.addArticleValues.title="";
            this.localState.addArticleValues.author="";
            this.localState.addArticleValues.description="";
            this.localState.addArticleValues.imageURL="";
            this.localState.addArticleValues.sourceURL="";
            

        },grabNewsFromSource(source){
            var home=this;
             $.get("https://newsapi.org/v2/top-headlines?sources="+source+"&apiKey=d1acce62730146128ed5282735fe1aeb", function(data, status){
                 
                var totalArticles= data["totalResults"];
                 //total articles
                var articles= data["articles"];

                for(var i=0;i<totalArticles;i++){
                    var currentArticle= articles[i];
                    var sourceURL= currentArticle["url"];
                    var author= currentArticle["author"];
                    var title= currentArticle["title"];
                    var description= currentArticle["description"];
                    var imageURL= currentArticle["urlToImage"];
               
                 
               home.newsFromNewsAPI.push({
                    title:title,
                    author:author,
                    description:description,
                    img:imageURL,
                    url:sourceURL
                });
                }

                
                    

 
 


 
                 
        });
        }
    }
}
</script>

