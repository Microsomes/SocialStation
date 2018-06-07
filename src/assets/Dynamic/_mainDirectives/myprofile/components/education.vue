
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

</style>
<template>
<div class="breifInfoContainer">
    <div class="educationColumnLeft">
        <div class="educationContainer"><!-- education container-->
            <div class="title educationText">
                Education
            </div>
                    <div class="editOptions"><!-- start of edit options-->
                         <div class="newIcon">
                            <i class="material-icons">add</i>
                         </div>
                         <div class="editIcon">
                            <i class="material-icons editIcon" >edit</i>
                         </div>
                     </div><!-- end of edit options-->
            <div class="educationItemsContainer">
                <div class="educationItem">
                    <div class="educationIcon">
                        <img src="https://yt3.ggpht.com/a-/ACSszfGtU3BL90b6N0aQ0CdAiEGt9v7KqckJGjoI4w=s900-mo-c-c0xffffffff-rj-k-no"/>
                    </div>
                    <div class="educationRightText">
                        <div class="educationPlace">
                            Aston University
                        </div>
                        <div class="educationYear">
                            2016-2020
                        </div>
                        <div class="educationLink">
                            <a href="http://www.aston.ac.uk/">http://www.aston.ac.uk/</a>
                        </div>
                        <div class="educationLink educationWhat">
                            Computer Science
                        </div>
                        
                     </div>
                      
                </div>
            </div><!-- end of education items container-->
            <div class="experienceContainer">
                <div class="title educationText">Experience</div>
            <div class="educationItemsContainer">
                <div class="educationItem">
                     <div class="educationIcon">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1200px-CostaLogo.svg.png"/>
                    </div>
                    <div class="educationRightText">
                        <div class="educationPlace">
                            Volunteered at Costa
                        </div>
                        <div class="educationYear">
                            2016-2020
                        </div>
                        <div class="educationLink">
                            <a href="http://www.aston.ac.uk/">https://www.costa.co.uk/</a>
                        </div>
                        <div class="educationLink educationWhat">
                            Serving cofee to costumers
                        </div>
                        
                     </div>
                </div>
            </div>
            </div>

            

        </div><!-- education container ends here-->

        <div class="skillsContainer">
            <div class="topRowKills">
            <div class="title">Skills and Endorsements</div>
            <div class="addSkillsOPtions">
                <div class="skillAddText">Add a new skill</div>
                <div class="skillAddIcon">  <i class="material-icons">add</i></div>
            </div>
            </div>
             <div class="skillsItemContainer">
                 <div class="skillsItem"><!-- start of skills item-->
                     <div class="skillText">Web  Development</div>
                     <div class="skillLine"></div>
                 </div><!-- end of skills item-->
                 
             </div>
        </div>
        
    </div><!-- column left container-->
    <div class="educationColumnRight">
        <div class="cvContainer">
            <div class="title titleCv">
                Curriculum Vitae(CV)
            </div>
            <div class="explanation">
                Upload your CV to your profile.
            </div>
            <div class="cvItemsContainer">

                <div class="cvItem">
                    <div class="cvIcon">
                          <i class="material-icons">event_note</i>
                    </div>
                    <div class="cvLink">
                        <a href="#" download>CV download</a>
                    </div>
                </div>
             </div>
             <div class="cvUploadButtonContainer">
                 <div class="cvUploadButton">
                     Upload CV
                 </div>
             </div>
             <div class="educationBio">
                 <div class="title">
                     Education Description
                 </div>
                 <div style="position:relative;left:4px;" class="explanation">A small piece discussing your skills goals and ambitions.</div>
                 <div class="educationBioText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

        }
    },created(){
            window.scrollTo(0, 200);
    }
}

</script>