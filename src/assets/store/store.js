import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
//import and use vuex


export const store= new vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

