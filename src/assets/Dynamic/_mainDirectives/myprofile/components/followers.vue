
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
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #D35B5B; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
    .breifInfoContainer{
        min-height: 1000px;
        overflow: hidden;
    }
    .breifInfoContainer{
        display: flex;
        font-family: 'Roboto', sans-serif;
    }
    .educationColumnLeft{
        min-width: 700px;
        margin: 10px;
        
     }
    .educationColumnRight{
        width: 600px;
      
     }
    .educationContainer{
        min-height: 400px;
        position: relative;

    }
    .title{
        color:grey;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
     }
    .line{
        height: 1px;
        background: grey;
    }
    .educationText{
        padding:20px;
    }
    .educationIcon{
        height: 100px;
        width: 100px;
    }
    .educationIcon img{
        width:100%;
        height: 100%;
    }
    .educationItemsContainer{
        min-height: 200px;
        padding: 20px;
    }
    .educationItem{
        display: flex;
        margin: 10px;
     }
    .educationRightText{
        width: 500px;
    }
    .educationPlace{
        color:grey;
        padding: 5px;
        padding-left: 0px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
    }
    .educationYear{
        color:grey;
        padding: 5px;
         position: relative;
        top:-12px;
    }
    .educationLink{
       position: relative;
       top:-15px;
       left: 8px;
    }
    .educationLink a{
        color:grey;
    }
    .educationWhat{
        color:grey;
        left: 3.8px;
    }
    .editOptions{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }
    .editOptions i{
        color:#D35B5B;
        font-size: 30px;
    }
        .editOptions i:hover{
            cursor:pointer;
            color:black;
        }
        .editOptions{
            position: absolute;
            right: 0px;
            top:0px;
            padding: 20px;
            width: 200px;
            height: 100px;
        }
        .editIcon i{
            font-size: 22px;
        }

        .skillsContainer{
             min-height:300px;
            padding: 20px;
            position: relative;
            top:-4px;
        }
        .topRowKills{
            display: flex;
            height: 100px;
        }
        .addSkillsOPtions{
            position: absolute;
            right: 0px;
            width: 200px;
            display: flex;
        }
        .skillAddText{
            color:grey;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70%;
            transition: all .2s;
        }
        .skillAddText:hover{
            cursor:pointer;
            color:black;
        }
        .skillAddIcon i{
            color:#D35B5B;
            position: relative;
            left:-10px;
            top:3px;
            transition: all .2s;
            font-size: 30px;
        }
        .skillAddIcon i:hover{
            cursor:pointer;
            color:black;
        }
        .skillText{
            color:grey;
            font-size: 15px;
            font-family: 'Roboto', sans-serif;

        }
    .skillLine{
        height: 1px;
        background: lightgray;
    }

    .cvContainer{
        min-height: 400px;
        margin: 10px;
        padding: 10px;
        font-family: 'Roboto', sans-serif;


    }
    .explanation{
        color:grey;
        position: relative;
        left: 3px;
        font-family: 'Roboto', sans-serif;
    }
    .cvItemsContainer{
        min-height: 100px;
        padding: 10px;
    }
    .cvItemsContainer a{
        color:grey;
     }
     .cvItem{
         display: flex;
         height: 50px;
         margin: 10px;
      }
     .cvIcon{
         height: 100%;
         width: 50px;
         display: flex;
         align-items: center;
         justify-content: center;
     }
     .cvIcon i{
         font-size: 40px;
         color:#D35B5B;
     }
     .cvLink{
          display: flex;
         align-items: center;
         background:#D35B5B;
         border-radius:10px;
         color:white;
         padding: 10px;
         margin: 10px;
     }
     .cvLink a{
         color:white;
     }
     .cvUploadButtonContainer{
         height: 200px;
         display: flex;
         align-items: center;
         justify-content: center;
     }
     .cvUploadButton{
         background:#D35B5B;
         border-radius: 20px;
         padding: 20px;
         color:white;
         display: flex;
         align-items: center;
         justify-content: center;
         margin: 20px;
         width: 300px;
     }
     .cvUploadButton:hover{
         cursor:pointer;
     }
    .educationBioText{
        font-family: 'Roboto', sans-serif;
         color:grey;
         position: relative;
         top:10px;
    }
    .educationRightText{
        width: 100%;
    }

    .addTagsInputContainer{
        height: 50px;
        padding: 5px;
        position: relative;
        left: -5px;
        min-width: 190px;
    }

    .addTagsInputContainer input[type="text"]{
        background: #F2F2F2;
        width: 100%;
        height: 100%;
        padding: 10px;
        outline:none;

    }
    .interestText{
        margin-top: 20px;
        font-family: 'Roboto', sans-serif;
        position: relative;
        left: 22px;
    }
.prefSubCategoryItem{
    min-height: 300px;
    position: relative;
    left:-5px;
    top:10px;
}
.subCatThemeText{
    font-size: 20px;
    color:grey;
    font-family: 'Roboto', sans-serif;
}
.tagItem{
    background:#D35B5B;
    color:white;
    width:100px;
    height:100px;
    padding: 10px;
    position: relative;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
}
.tagItem:hover{
    cursor:pointer;
}
.tagItemContainer{
    position: relative;
    min-height:300px;
    min-width:100px;
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
}
.tagClose{
    border-radius: 50%;
    width:30px;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:-15px;
    right:-10px;
    background:#D35B5B;
}
.tagClose:hover{
    transform: scale(1.2);
}
.tagClose:active{
    background:black;
}
.friendItem{
    min-height: 140px;
    display:flex;
    margin-top:20px;
    padding:0px;

 }

.friendItem:hover{
    background:lightgoldenrodyellow;
    cursor:pointer;
}

.leftImage{
    height:100%;
    width:200px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.leftImage img{
    width:100%;
    height:100%;
}
.rightText{
    width:340px;
}
.lightedImageItem{
    width:100px;
    height:100px;
}
.highlightedImagesGlance{
    display: flex;
}
.profileName{
    color:grey;
    font-weight: bold;
    padding: 10px;
    padding-left:0px;
    padding-top:0px; 
    font-size: 30px;
    font-family: 'Roboto', sans-serif;


}
.profileBio{
    color:grey;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    overflow-y: scroll;
    height:80px;

}

  @media only screen and (max-width:771px){
       .educationColumnLeft{
           min-width: 100px;
       }
       .breifInfoContainer{
           width: 100%;
       }
       .educationItem{
        display: block;
        margin: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
        
     }
     .educationItemsContainer{
         display: flex;
         align-items: center;
         justify-content: center;
     }
     .topRowKills{
         display: block;
         text-align: center;
     }
     .breifInfoContainer{
         flex-flow: column;
     }
     .educationColumnRight{
         width: 100%;
     }
     .educationIcon{
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
     }
     .educationIcon img{
         width: 100px;
     }
     .tagItemContainer{
         width:100%;
     }
     .educationItemsContainer{
         flex-flow: column;
         width:100%;
     }

    
    .friendItem{
        flex-flow: column;
        min-height:300px;
        width:100%;
    }
    .profileBio{
        min-height:150px;
        width: 100%;
        
    }
    .rightText{
        width:100%;
    }

    .leftImage img{
        border:1px solid pink;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: center;
        position: relative;
        left:15px;
    }
    .addTagsInputContainer{
        width:100%;
    }
    .addTagsInputContainer input[type="text"]{
        width: 100%;
    }
    }
    .findFriendsText{
        position: relative;
        left:-15px;
    }
    .findFriendsResultContainer{
        color:grey;
    }
</style>
<template>
<div class="breifInfoContainer">
    <div class="educationColumnLeft">
        <div class="educationContainer"><!-- education container-->
            <div class="title educationText">
                Friends
            </div>

            <div class="explanation interestText">Your friends will be displayed below.
            </div>
           
                  
            <div class="educationItemsContainer">
             
                <div class="addTagsInputContainer">
                    <input type="text" placeholder="search through your friends"/>
                </div>
                
                <div class="tagItemContainer">
                     <!-- start of friends item-->
                <div class="friendItem">
                    <div class="leftImage">
                        <img src="https://carib101.com/wp-content/uploads/2017/09/taylor_swift_big_announcements_feature.jpg"/>
                    </div>
                    <div class="rightText">
                        <div class="profileName">
                            Taylor Swift
                        </div>
                        <div class="profileBio">
                            Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. 
                        </div>
                       
                    </div>
                </div>
                <!-- end of friends item-->
                 <!-- start of friends item-->
                <div class="friendItem">
                    <div class="leftImage">
                        <img src="https://carib101.com/wp-content/uploads/2017/09/taylor_swift_big_announcements_feature.jpg"/>
                    </div>
                    <div class="rightText">
                        <div class="profileName">
                            Taylor Swift
                        </div>
                        <div class="profileBio">
                            Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. 
                        </div>
                       
                    </div>
                </div>
                <!-- end of friends item-->
                 <!-- start of friends item-->
                <div class="friendItem">
                    <div class="leftImage">
                        <img src="https://carib101.com/wp-content/uploads/2017/09/taylor_swift_big_announcements_feature.jpg"/>
                    </div>
                    <div class="rightText">
                        <div class="profileName">
                            Taylor Swift
                        </div>
                        <div class="profileBio">
                            Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. 
                        </div>
                       
                    </div>
                </div>
                <!-- end of friends item-->
                   

                </div>
                
                   
            </div><!-- end of education items container-->
            

            

        </div><!-- education container ends here-->

      
        
    </div><!-- column left container-->
    <div class="educationColumnRight">
        <div class="cvContainer">
            <div class="title titleCv">
                Suggested Friends
            </div>
            <div class="explanation" style="left:5px;">Settings decide how you want SS to behave. 
            </div>
            <div class="cvItemsContainer">
                
             
             <!-- start of friends item-->
                <div class="friendItem">
                    <div class="leftImage">
                        <img src="https://carib101.com/wp-content/uploads/2017/09/taylor_swift_big_announcements_feature.jpg"/>
                    </div>
                    <div class="rightText">
                        <div class="profileName">
                            Taylor Swift
                        </div>
                        <div class="profileBio">
                            Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. 
                        </div>
                       
                    </div>
                </div>
                <!-- end of friends item-->


             </div>
             <div class="findFriendsContainer">
                 <div class="title educationText findFriendsText">Find Friends</div>
                   <div class="addTagsInputContainer">
                    <input type="text" placeholder="Find Friends"/>
                </div>
                <div class="findFriendsResultContainer">
                    no friends found
                </div>
             </div>
              
            
        </div>
    </div>
</div>
</template>

<script>

export default{
    data:function(){
        return {
            switch1:false
        }
    },created(){
     }
}

</script>