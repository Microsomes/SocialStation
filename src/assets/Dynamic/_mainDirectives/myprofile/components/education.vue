
<style scoped>
    .breifInfoContainer{
        min-height: 1000px;
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
        border:1px solid black;
        width: 600px;
        display: none;
    }
    .educationContainer{
        min-height: 400px;
        box-shadow: 5px 5px 5px 2px #888888;
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
            box-shadow: 5px 5px 5px 2px #888888;
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
        social interactions who else is in education etc social widgets
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