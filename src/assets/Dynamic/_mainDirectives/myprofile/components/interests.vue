
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
</style>
<template>
<div class="breifInfoContainer">
    <div class="educationColumnLeft">
        <div class="educationContainer"><!-- education container-->
            <div class="title educationText">
                Interests
            </div>

            <div class="explanation interestText">Add tags to your interests/prefs so we can personalize your feeds.
            </div>
           
                    <div class="editOptions"><!-- start of edit options-->
                         <div class="newIcon">
                            <i class="material-icons">add</i>
                         </div>
                         <div class="editIcon">
                          </div>
                     </div><!-- end of edit options-->
            <div class="educationItemsContainer">
             
                <div class="addTagsInputContainer">
                    <input type="text" placeholder="type a tag and push enter"/>
                </div>
                
                <div class="tagItemContainer">
                    <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>
                     <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>
                    <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>
                    <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>
                    <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>
                    <div class="tagItem">
                        <div class="tagClose">X</div>
                        HTML
                    </div>

                </div>
                   
            </div><!-- end of education items container-->
            

            

        </div><!-- education container ends here-->

      
        
    </div><!-- column left container-->
    <div class="educationColumnRight">
        <div class="cvContainer">
            <div class="title titleCv">
                Preferences
            </div>
            <div class="explanation" style="left:5px;">Settings decide how you want SS to behave. 
            </div>
            <div class="cvItemsContainer">
                
                <div class="prefSubCategoryItem">
                    <div class="subCatThemeText">Look and Theme</div>
                    <v-btn style="padding:0px;">Dark Mode</v-btn>
                    <v-btn style="padding:0px;">Light Mode</v-btn>
                    <v-btn style="padding:0px;">Default</v-btn>
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
    }
}

</script>