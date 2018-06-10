
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

.loader{
    height:400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/*loder animation*/
.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: red;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
 
.newsBoardContainer{
    min-height:800px;
    display:flex;
   
}

.leftContaner{
    width:900px;
    min-height:500px;
     display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}
.rightContent{
    width:500px;
}


@media only screen and (max-width: 900px) {
    .newsBoardContainer{
        flex-flow: column;
        width:100%;
     }
     .rightContent{
         width:100%;
         background:red;
         display:none;
     }
      .leftContaner{
          width: 100%;
          overflow: hidden;
          
      }
}

</style>

<template>
<!-- start of news board container-->
<div class="newsBoardContainer">

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

    <div class="leftContaner">
 <div class="title">
                User generated news
            </div>
            <div class="explanation">
                Share news on this board, dicuss it via comments and learn something new.
            </div>
            <v-btn @click="shareNews()" style="padding:0px;font-family: 'Roboto', sans-serif;">Share some news</v-btn>
    
        <newsItemComp v-for="n in newsp2" :postData="n" ></newsItemComp> 

     </div>
    <div class="rightContent">
        <!-- <div class="thoughtsContainer">
            <div class="title">Thoughts</div>
            <reddit_style_post></reddit_style_post>
        </div> -->
    </div>

</div>
<!-- end of news board container-->


</template>
   

<script>
import bigNewsItem from './bigNewsItem';
//import the bNewsitem to display bigger news
import newsItemComp from './newsItemComp';

import {db} from './../../../firestore.js';
//import the firebase database instance

import reddit_style_post from './redditStylePost';
//import reddit style post

export default {
    data:function(){
        return {
            state:{
                isLoading:true
            },
            
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
        newsItemComp,
        reddit_style_post
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
    },mounted(){
        var home=this;
        setTimeout(function(){
        home.state.isLoading=false;
        },2000)
        //above starts the loading process for 2 seconds giving users something to look at whilst firebase returns data to ss
     }
}
</script>

