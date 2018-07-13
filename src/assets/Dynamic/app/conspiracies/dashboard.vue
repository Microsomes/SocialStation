<template>
<div class="container">
     <div v-if="postData" class="postItemContainer">
        <div class="postItemImage">
            <img height="100%" width="100%" :src="postData.urlToImage"/>
        </div>
        <div class="postItemTitle">
            {{postData.title}}
        </div>
        <div class="postItemMetric">
            <div class="metricItem">{{postData.author}}</div>
            <div class="metricItem">{{timeAgo}}</div>
        </div>
        <div class="postItemContent">
            content
        </div>
    </div>
 </div>
</template>


<style scoped>
.postItemContent{
     
    min-height:300px;
    font-family: 'Roboto', sans-serif;
 
}
.postItemMetric{
     display: flex;
    justify-content: space-around;
    padding: 20px;
}
 
.postItemTitle{
     height:50px;
     padding: 4px;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 18px;

}
.postItemImage{
     height:225px;
}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}
.postItemContainer{
    height:800px;
    width: 400px;
    border:1px solid lightgray;
    padding:10px;

}
</style>

<script>

import {db} from './../../../firestore.js';

 
export default{
    data:function(){
        return{
            postData:null
        }

    },created(){
        var home=this;
        db.collection("conspiracies").where("keys","==",this.$route.params.key).get().then(data=>{

            if(data.empty){
                //no article
                console.log("no data");
            }else{

                data.forEach(d=>{
                    console.log(d.data());
                    var da= d.data();
                    home.postData=da;
                })

            }

        }).catch(err=>{

        })
    },components:{
         
    },computed:{
        timeAgo(){
            if(this.postData==null){
                return ""
            }else{
                return this.$moment(this.publishedAt).fromNow();
            }
        }
    }
}
</script>