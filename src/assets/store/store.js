import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
//import and use vuex


export const store= new vuex.Store({
    state:{
        authRelated:{
            isLoggedIn:false,
            loginDetails:{
                profileMeta:{
                    profileCompletion:10
                },
                uid:'',
                email:'',
                optionalAdditionalData:{
                    //additional alias username is stored here
                    name:'',//users don't really need to have one
                    bio:'',
                    userRole:'nonAdmin',
                    isHungryRabbit:false, //determines if user gets hungry rabbit previleges
                    location:'',
                    website:'',
                    birthday:'',
                    highlightedImages:[],
                },
                extraInfo:{
                    pinnedReads:{
                        reads:[
                            //stores data of all the currently pinned reads by the user and other people who pinned to
                            {
                                title:'Secrets of trading...',
                                pinnedBy:'Tayyab'
                            },
                            {
                                title:'Marriage Guide',
                                pinnedBy:'Tayyab'
                            }
                        ]
                    },
                    likedBy:{
                        //stores data of all the people that liked the currently signed in user
                        likes:[
                            {
                                whom:'Taylor',
                                timeStamp:'1 sec ago'
                            },
                            {
                                whom:'Irtizas girl',
                                timeStamp:'2 sec ago'
                            }
                        ]
                    },
                    memorialWall:{
                        //stores all the entries on the memorial wall
                        memorial:[
                            {
                                createdBy:'Tayyab Javed',
                                timeStamp:'1 hour ago',
                                text:'memorial text'
                            }
                        ]
                    }
                }//end of extra info
                
            }//end of login details
        }
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },actions:{

    }
})

