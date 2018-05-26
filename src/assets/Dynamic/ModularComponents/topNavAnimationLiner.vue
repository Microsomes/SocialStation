<style scoped>

@keyframes lineMove {
    0%   {width: 25%}
    25%  {width: 50%}
    50%  {width: 75%}
    100% {width: 100%}
}


.waveContainer{
display: flex;
align-items: center;
justify-items: center;
height: 10px;;
}

.line1{
    height:2.5px;
    background: #C52C2C;
    width: 100%;
    transition: all .5s;
    animation-name: lineMove;
    animation-duration: 10s ;
 
    
}



</style>

<template>
<div class="waveContainer">

<div class="line1"></div>

</div>
</template>

<script>
export default {
    data:function(){

    }
}
</script>


