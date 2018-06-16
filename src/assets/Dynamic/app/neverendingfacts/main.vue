
<style scoped>


</style>

<template>

<div>
    never ending facts
    <factscomponentitem></factscomponentitem>
</div>

</template>


<script>

import factscomponentitem from './neverendingfactscomponents/factscomponentitem.vue';
//import facts component item
export default{
    data:function(){
        return {

        }
    },components:{
        factscomponentitem,
    }
}

</script>