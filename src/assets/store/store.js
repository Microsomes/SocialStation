import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
//import and use vuex


export const store= new vuex.Store({
    state:{
        authRelated:{
            isLoggedIn:false,
            loginDetails:{
                uid:'',
                email:''
            }
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

