
<style scoped>
.infoContainer{
    border:1px solid grey;
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
    background: red;
    transform: scale(2.5);
 }
.photosContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.leftSide{
    border:1px solid black;
    display: flex;
}
.memoralWallContainer{
    border:1px solid grey;
    width: 600px;
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
</style>


<template>
<div class="breifInfoContainer">
    <div class="leftSide">
        <div class="infoContainer">
            <div class="profileName">
                Muahmmed T Javed
            </div>
            <div class="bio">
                Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. 
            </div>
            <div class="iconableInfo">
                <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">location_on</i></div>
                    <div class="text">England,Birmingham</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">link</i></div>
                    <div class="text"><a  target="_blank" href="#">socialstation.io</a></div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">access_time</i></div>
                    <div class="text">Joined 25th June 2018</div>
                </div>
                 <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">tag_faces</i></div>
                    <div class="text">Born on 6th Febuary 1998</div>
                </div>
            </div>
            <div class="photosAndImagesContainer">
                 <div class="phototstitle">
                    <div class="inconableInfoItem">
                    <div class="icon">  <i class="material-icons">image</i></div>
                    <div class="text">Highlighted Pictures</div>
                </div>  
                <div class="photosContainer">
                    <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                       <div class="photoItem">
                        <img height="100%" width="100%" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
                    </div>
                  
                </div>
                 </div>
            </div>
        </div><!-- end of info container-->
        <div class="memoralWallContainer"><!-- start of memorial wall-->
            <div class="memoraiTitle">
                Memorial wall
            </div>
            <div class="memorialSubline">what will people remmeber about you after you die. Write down your most dearest and important thoughts </div>
            <div class="typeSomething"></div>
    
        </div><!-- end of memorail wall-->
    </div>
    <div class="rightSide">

    </div>
</div>
</template>

<script>

export default{
    data:function(){
        return {

        }
    }
}

</script>