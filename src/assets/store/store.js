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
                email:'',
                optionalAdditionalDate:{
                    //additional alias username is stored here
                    username:'',//users don't really need to have one
                    bio:'',
                    userRole:'nonAdmin',
                    isHungryRabbit:false //determines if user gets hungry rabbit previleges
                }
            }
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

