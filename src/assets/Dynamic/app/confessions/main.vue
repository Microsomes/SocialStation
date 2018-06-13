<style scoped>

.active{
 }

.title{
    color:grey;
    font-weight: bold;
    padding: 10px;
    font-family: 'Roboto', sans-serif;

}
</style>

<template>

<div class="confessionContainer">
    <b-nav tabs>
  <b-nav-item :class="{active:navState.isConfession}" @click="changeNav('is')">
      <router-link to="/codeModule/confessions/confessionall">Confessions</router-link>
  </b-nav-item>
  <b-nav-item :class="{active:navState.isAddConfession}" @click="changeNav('nay')">
      <router-link to="/codeModule/confessions/addconfession">Add Confession</router-link>
  </b-nav-item>
  </b-nav>

  <div class="title">Confess anything annonymously.</div>
     <router-view/>
</div>
    
</template>


<script>


export default {
    data:function(){
        return {
            navState:{
                isConfession:true,
                isAddConfession:false
            }
        }
    },methods:{
        changeNav(which){
            switch(which){
                case "is":
                this.navState.isConfession=true;
                this.navState.isAddConfession=false;
                break;
                case "nay":
                 this.navState.isConfession=false;
                this.navState.isAddConfession=true;
                break;
            }
        }
    }
}
</script>