<style scoped>
    .warningBar{
         display: flex;
        align-items: center;
        min-height:50px;
        font-family: 'Roboto', sans-serif;

    }
    .warningIcon{
        height:100%;
        width:50px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .warningIcon i{
        color:#C62D2D;
    }
</style>

<template>
<div class="warningBar">
<div class="warningIcon">
      <i class="material-icons">warning</i>
</div>
<div class="warningText">{{text}}</div>
</div>

</template>


<script>

export default{
    data:function(){
        return {

        }
    },props:["text"]
}

</script>