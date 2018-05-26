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
    width:200px;
    height: 120px;
    border-radius: 5px;
}
.topImage{
     height: 85px;
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

</style>

<template>
<div>
    <div class="newsStatus">
        {{newsStatus}}
    </div>
    <div class="newsContainer">
        
        <div v-for="n in newsItems" class="newsItem">
            <div class="topImage">
                {{n}}
                <div class="readMore">
                            <v-btn class="readMoreBut" style="background:grey;color:white;font-family: 'Roboto', sans-serif;">Read</v-btn>
                </div>
            </div>
            <div class="newsTitle">
                Donald trump kills himself
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data:function(){
        return{
            newsStatus:'Showing top news from all sources',
            newsItems:[
                "one",
                "two",
                "three",
                "four",
                "five",
                "six"
            ]
        }
    }
}
</script>

