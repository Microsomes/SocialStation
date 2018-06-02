 
    <style scoped>

      
        .container{
            height:100%;
             background:none;
            width:960px;
         }
        .topLayer{
            height:200px;
            padding:10px;
            position: relative;
        }
        .mainTitle{
             height:50px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-family: 'Roboto', sans-serif;  
        }
        .logoContainer{
             position: relative;
            left:-4px;
        }
        .logoContainer .logoImg{
            height: 90px;
            transform: rotate(20deg);
            position: relative;
            top:7px;
            cursor:pointer;
        }
        .subTittle{
             text-align: center;
             color:grey;
        }
        .subTittle .subTitleText{
            position: relative;
            left:100px;
            margin: 0px;
        }
        .accountIcon{
            position: absolute;
            right:20px;
            cursor: pointer;
        }
        .accountIcon .accountImage{
            width:25px;
            height: 25px;
            cursor: pointer;
            
        }
        .accountIconText{
            position: absolute;
            left:-18px;
            font-size: 10px;
            font-family: 'Roboto', sans-serif;
            color:grey;
            margin-top:2px;
        }
        .main_content{
            min-height: 300px;
        }
        .main_content .search_container{
             height:60px;
        }
        .search_container{
            display: flex;
            
         }
        .search_container .searchIcon{
            width:30%;
         }
        .searchIcon{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .searchIconImg{
            height:50px;
            width:50px;
            position: relative;
            left:-40px;
            top:3px;
         }
         .searchBox{
              width:70%;
              color:white;
           }

           @keyframes searchBox {
    0%   {top:0px;}
    25%  {top:-50px;}
    50%  {top:-50px;}
    100% {top:0px;}
}

         .searchBox input[type="text"]{
             width:70%;
             height: 100%;
             outline:none;
             border:none;
             font-size: 20px;
             color:grey;
             padding: 10px;
             background:#F2F2F2;
             position: relative;
            /* animation-name: searchBox;
            animation-duration:3s ; 
            transition: all .5s; */
          }
          @keyframes postStatusRotate {
    0%   {transform: rotate(90deg);opacity: 0;}
    25%   {transform: rotate(180deg);opacity: 0.25;}
    75%   {transform: rotate(240deg); transform: scale(1.2);opacity: 0.50;}
    100%   {transform: rotate(360deg);opacity: 1;}
   
    }
          .postStatusContainer{
              height:100px;
              padding:10px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size:30px;
              font-family: 'Roboto', sans-serif;
                color:grey;
                position: relative;
                top:50px;
                 animation-name: postStatusRotate;
                 animation-duration: 5s ;
  
          }
          .postStatusIcon{
              width:35px;
              width:35px;
              position:relative;
              left:-16px;
          }
          .joinContainer{
              height:100px;
              display: flex;
              align-items: center;
              justify-items: center;
              text-align: center;
               width:100%;
          }
          .joinContainerButton{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
               left:380px;
            color:white;
            top:70px;
            cursor:pointer;
           }

           .promo_container{
               height:400px;
               background: #C62D2D;
               width: 100%;
               display: flex;
               color: white;
           }
           .promo_container div h1{
               font-family: 'Roboto', sans-serif;

           }
           .promo_container div{
               width:33.33%;
               border-left:1px solid white;
            font-family: 'Roboto', sans-serif;
                padding: 10px;
            }
           .promo_container div:nth-child(1){
               border:none;
           }
           
           .additionalLinks{
               height:300px;
               background: #F2F2F2;
               padding: 10px;
               text-align: center;
               position: relative;
           }
           .additionalLinks{
               display: flex;
           }
        .additionalLinks .linker{
            width:20%;
         }
        .linkerTitle{
            width:100%;
            display: flex;
            justify-content: center;
            color:#616161;
            font-size: 25px;
            font-family: 'Roboto', sans-serif;
            text-align: center;

        }
        .links a:hover{
            background: grey;
            padding: 5px;
            color:white;
        }
    .links a{
        color:#616161;
        text-decoration: none;
        font-size: 17px;
        font-family: 'Roboto', sans-serif;
        margin-top:4px;
        transition: all .2s;
    }
        .links{
            height: 100%;
            display: flex;
            padding: 20px;
            flex-flow: column;
            align-items: center;
         }
         .childWebsitesContainer{
              min-height: 200px;
             margin-top: 10px;
         }
         .childWebsitesContainer h2{
             color:grey;
             padding: 10px;
            font-family: 'Roboto', sans-serif;
         }
         .additionalLinksTip{
             position: absolute;
             top:-15px;
             color: grey;
             padding: 2px;
            font-family: 'Roboto', sans-serif;
            background: #F2F2F2;
            color:black;
            border-radius: 5px;
            padding: 2px;



         }
    </style>

 
<!--
    TODO ADD CORRECT STYLES
-->
<template>
    
 
 
    <div class="container">

        <div class="topLayer">
          
           <!-- code rendered redundant 02/06/2018-->
            <div style="display:none" class="accountIcon">
                                <router-link to="/in">

                <img class="accountImage" src="./../../images/home/User Icon.jpg"/>
                                </router-link>
                <router-link to="/in">
                <div class="accountIconText">
                    Login/signup
                </div>
                </router-link>
            </div>
            <!-- code rendered redundant 02/06/2018-->

            <div class="mainTitle">
                <div class="logoContainer">
                   <img class="logoImg" src="./../../images/home/logoOfficial.png">
                </div>
                Social Station
            </div>
            <div class="subTittle">
                <p class="subTitleText">The only Modular social media playform in the World</p>
            </div>
        </div><!-- end of the top layer-->

        <div class="main_content">
            <div class="search_container">
                <!--TODO ADD SEARCH MODULES-->
                <div class="searchIcon">
                    <img class="searchIconImg" src="./../../images/home/Search Icon.jpg"/>
                </div>
                <div class="searchBox">
                    <input placeholder="Search a Module. Type |help if unsure" type="text" />
                </div>
            </div>
            <div class="postStatusContainer">
                <img class="postStatusIcon" src="./../../images/home/Tiles Big Icon.png"/>
                0 posts to date
            </div>
            <div class="joinContainer">
                <div class="joinContainerButton">

                     
                </div>
            </div>
        </div>

        <div class="promo_container">
            <div class="promo1">
                <h1 style="text-align:center">Modular</h1>
               
            <p style="font-size:20px;color:white">
                Social Media that is created in pieces that join together to create a Social ecosystem.
                <br><br>Model Social Station to your liking, mix and match modules that you like using.

            </p>
            
            </div>
            <div class="promo2">
                 <h1 style="text-align:center">Open Source</h1>
            <p style="font-size:20px;color:white">
                Open Source is the future, Have an idea why not fork SS and add your feature.
                <br>If we like it we will add it to SS and give you a thank you for your constribution.

            </p>
            </div>
            <div class="promo3">
                <h1>Privacy!!!</h1>
                <p style="font-size:20px;color:white">
                Privacy definition:a state in which one is not observed...
                We don't log your data so you are always safe on SS. Plus since SS is open source you can check the code yourself, their are NO secrets.
                </p>
            </div>
        </div><!-- end of promo-->

         <div class="childWebsitesContainer">
                <div class="linkerTitle">
                    Social Station Child Websites
                </div>
                <div class="links">
                   <router-link to="/codeModule/cryptofolio">eventsmap.io</router-link>  
                                      <router-link to="/codeModule/cryptofolio">govexposed.com</router-link>  
                                      <router-link to="/codeModule/cryptofolio">makealistnow.com</router-link>  
                    <router-link to="/codeModule/cryptofolio">nextbighype.com</router-link>  

                   <router-link to="/codeModule/cryptofolio">clubmotivations.com</router-link>  
   
                 </div>
         </div>

        <div class="additionalLinks">
            <div class="additionalLinksTip">
                Quick Options
            </div>
            <div class="linker">
                <div class="linkerTitle">
                    Create
                </div>
                <div class="links">
                   <router-link to="/create/fact">Create Fact</router-link>  
                   <router-link to="/create/fact">Create Question</router-link>  
                   <router-link to="/create/fact">Create Article</router-link>  
                   <router-link to="/create/fact">Create WebPage</router-link>  
                   </div>
            </div>
             <div class="linker">
                 <div class="linkerTitle">
                    Featured Modules
                </div>
                <div class="links">
                   <router-link to="/codeModule/cryptofolio">CryptoFolio</router-link>  
                   <router-link to="/codeModule/cryptofolio">SS Board</router-link>  
                   <router-link to="/codeModule/cryptofolio">SS Tube</router-link>  
                   <router-link to="/codeModule/cryptofolio">Q/A</router-link>  
                   <router-link to="/codeModule/cryptofolio">SS Islam QA</router-link>  
                   <router-link to="/codeModule/cryptofolio">SS Christianity QA</router-link>  
                   <router-link to="/codeModule/cryptofolio">SS TooManyFacts</router-link>  
                 </div>
             </div>
             
            <div class="linker">
                 <div class="linkerTitle">
                    Social
                </div>
                <div class="links">
                   <router-link to="/codeModule/cryptofolio">Social Station Feed</router-link>  
                   <router-link to="/codeModule/cryptofolio">Whos doing what</router-link>  
                   <router-link to="/codeModule/news">News</router-link>  
                 </div>
            </div>
            
            <div class="linker">
                 <div class="linkerTitle">
                    Developers/info
                </div>
                <div class="links">
                   <router-link to="/codeModule/cryptofolio">About</router-link>  
                   <router-link to="/codeModule/cryptofolio">Breif Paper</router-link>  
                   <router-link to="/codeModule/cryptofolio">Create a Module</router-link>                      
                   <router-link to="/codeModule/cryptofolio">Road Map</router-link>                      
                   <router-link to="/codeModule/cryptofolio">Media/Promo</router-link>                      
                   <router-link to="/codeModule/cryptofolio">Contact Us</router-link>                      
                   <router-link to="/codeModule/cryptofolio">Admin Portal</router-link>                      
                 </div>
            </div>
            
            <div class="linker">
                <div class="linkerTitle">
                    Support Us
                </div>
                <div class="links">
                   <router-link to="/codeModule/cryptofolio">Donate</router-link>  
                   <router-link to="/codeModule/cryptofolio">Contact Us</router-link>  
                   
                 </div>
            </div>
         </div>

         
        
    </div>

 
</template>
