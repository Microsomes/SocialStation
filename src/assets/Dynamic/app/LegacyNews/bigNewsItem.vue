
<script>

export default{
    data:function(){
        return {

        }
    }
}

</script>

<template>
<div class="bNewsContainer">
    <div class="leftContent">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="description">
            <slot name="description"></slot>
            </div>
        <div class="when">
            <slot name="when"></slot>
            </div>
        <div class="submittedBy">
            <slot name="submittedBy"></slot>
            </div>
        <div class="editOption">
            <slot name="EditOptions"></slot>
            </div>
        <div class="comments">
            <slot name="comments"></slot>
            </div>
    </div>
    <div class="rightContent">
        <div class="newsImage">
            <slot name="newsImage"></slot>
            </div>
    </div>
</div>
</template>

<style scoped>
.bNewsContainer{
    border:1px solid black;
}
</style>