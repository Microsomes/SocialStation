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
      <router-link to="/c/b/all">Blogs</router-link>
  </b-nav-item>
  <b-nav-item :class="{active:navState.isAddConfession}" @click="changeNav('nay')">
      <router-link to="/c/b/add">Create a Blog</router-link>
  </b-nav-item>
  </b-nav>

  <div class="title">Blogging is fun and we make it easy.</div>
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