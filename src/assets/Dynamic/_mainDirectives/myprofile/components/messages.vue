
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
    min-height: 500px;
    margin-top: 50px;
}
.messagesTopBar{
    background: #D35B5B;
    color:white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    display: flex;
    height: 100px;
}
.menuIcon{
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;   
}
.menuIcon i{
    font-size: 40px;
    transition: all .2s;
}
.menuIcon i:hover{
    cursor: pointer;
    color:black;
}
.moduleName{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    width: 100px;
    color:white;
    position: relative;
    left: 40px;
}
.chattingWith{
    position: relative;
    left: 40px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.amountOfPeople{
    min-width:80px;
    position: relative;
    left: 40px;
    font-size: 15px;
    color:#E1E9EE;
    display: flex;
    align-items: center;
    justify-content: center;
}
.messageMainContainer{
    display: flex;
}
.openChatsLeft{
    width: 400px;
    min-height:500px;
    border-right: 1px solid grey;
}
.messagesBox{
    width: 1000px;
    color:grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.searchChatsContainer{
    height: 50px;
    padding: 5px;
}
.searchChatsContainer input[type="text"]{
    background:#F2F2F2;
    width:100%;
    height: 100%;
    padding: 10px;
    outline:none;
}
</style>
<template>
<div class="breifInfoContainer">
    <!-- start of messages top bar-->
    <div class="messagesTopBar">
        <div class="menuIcon">
              <i class="material-icons">menu</i>
        </div>
        <div class="moduleName">SSGram</div>
        <div class="chattingWith">Jibrel Network </div>
        <div class="amountOfPeople">20 people</div>
     </div><!-- end of messages top bar-->
     <div class="messageMainContainer">
         <div class="openChatsLeft">
             <div class="searchChatsContainer">
                 <input type="text" placeholder="search"/>
             </div>
             <div class="chatItemsContainer">
                 <div class="chatItem">
                     <div class="leftChatImage"></div>
                     <div class="rightText"></div>
                 </div>
             </div>
         </div>
         <div class="messagesBox">
             Please select a chat to start messaging
         </div>
     </div>

</div><!-- end of main container-->
</template>

<script>

export default{
    data:function(){
        return {

        }
    }
}

</script>