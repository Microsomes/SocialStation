
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