/*
Author Muhammed T Javed
- Alpha 1 of Social station.
Social station is an open souce modular social media platform.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueTyperPlugin from 'vue-typer'

import Typewriter from 'vue-typewriter'

Vue.use(Typewriter);
 
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueTyperPlugin)
 
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)

Vue.use(require('vue-moment'));



// import './assets/firebase';
// //import the firebase user library
// import VueFire from 'vuefire';
// // explicit installation required in module environments
// Vue.use(VueFire);



import './assets/firestore';
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import {store} from './assets/store/store';
//import vuex store centralized state manager
require('firebase/firestore')
Vue.use(VueFirestore)
//import the firestore library above

 
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

 
 
Vue.use(VueRouter);

import Vuetify from 'vuetify'
 
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import staticRules from './assets/Static/rules.vue';
import staticHelp from './assets/Static/help.vue';
//import static pages above

import dynoSignInUp from './assets/Dynamic/_mainDirectives/signinandup.vue';
import dynoMainFeed from './assets/Dynamic/codeModules/MainFeed.vue';
import dynoAnimationLiner from './assets/Dynamic/ModularComponents/topNavAnimationLiner.vue';
import dynoCreate from './assets/Dynamic/codeModules/create.vue';
import dynoCreateRandomFact from './assets/Dynamic/createPages/createRandomFact.vue';
import dynoHome from './assets/Dynamic/_mainDirectives/home.vue';
import dynoEntry from './assets/Dynamic/_mainDirectives/entry.vue';
//import dynamic pages above
import dynoNews from './assets/Dynamic/app/news/main.vue';

import legacy_news from './assets/Dynamic/app/LegacyNews/main.vue';
//import legacy news

import dynoModuler from './assets/Dynamic/codeModules/moduler.vue';
import dynoCryptoFolio from './assets/Dynamic/app/CryptoFolio/main.vue'
//cryptofolio module impoted
import dynamicComponent from './assets/Dynamic/codeModules/randomFact.vue';
//import dynamic components


//import core pages
import myProfilePage from './assets/Dynamic/_mainDirectives/myprofile/main.vue';

//imports app modules
import blog from './assets/Dynamic/app/blog/main.vue';
//imported the blog module
import neverending from './assets/Dynamic/app/neverendingfacts/main.vue';
//imported the never ending facts module
import eventsMap from './assets/Dynamic/app/eventsmap/main.vue';
//import events map core module
import qanda from './assets/Dynamic/app/qa/main.vue';
//import question and answer module
import sschan from './assets/Dynamic/app/sschan/main.vue';
//import 4chan module
import theeidshow from './assets/Dynamic/app/eidshow2018/main.vue';

Vue.component("randomFact",dynamicComponent);
Vue.component("animLiner",dynoAnimationLiner);


import example_modal from './assets/exmaples/modal.vue';
//import example vues below

import comments_section from './assets/Dynamic/ModularComponents/sscommentsSection/main.vue';
//import commments comment
Vue.component("ssdisqus",comments_section);

import better_auth from './assets/Dynamic/_mainDirectives/better_auth/home.vue';


import warning_bar from './assets/Dynamic/ModularComponents/waningbar';
Vue.component("warning_bar",warning_bar);


import dyno_confessions from './assets/Dynamic/app/confessions/main.vue';


//import all confessions app pages
import dyno_confessions_dashboard from './assets/Dynamic/app/confessions/confessionPages/dashboard.vue';
import dyno_confessions_add_confession from './assets/Dynamic/app/confessions/confessionPages/addconfession.vue';
import dyno_confessions_slug_view from './assets/Dynamic/app/confessions/confessionPages/confess.vue';
//registering vue components above
const routes=[
  {
    path:'/examples',
    component:example_modal
  },
  {
    path:'/in',
    component:dynoSignInUp
  },
  {
    path:'*',
    component:dynoHome,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/profile/:page',
    component:myProfilePage,
    name:'myprofile'
  },
  {
    path:'/dashboard',
    component:dynoHome,
    name:'dashboard',
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/',
    component:dynoEntry
  },
  {
    path:'/help',
    component:staticHelp,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/rules',
    component:staticRules,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/create',
    component:dynoCreate,
    children:[{
      path:'fact',
      component:dynoCreateRandomFact
    }
    ],
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/c',
    component:dynoModuler,
    meta:{
      requiresAuth:true
    },
    children:[
      {
        path:'news',
        component:dynoNews
      },
      {
      path:'cryptofolio',
      component:dynoCryptoFolio
     },
     {
       path:'feed',
       component:dynoMainFeed
     },
     {
       path:'legacynews',
       component:legacy_news
     },
     {
       path:'blog',
       component:blog
     },
     {
       path:'neverending',
       component:neverending
     },
     {
       path:'eventsmap',
       component:eventsMap
     },
     {
       path:'qanda',
       component:qanda
     },
     {
       path:'sschan',
       component:sschan
     },
     {
       path:'theeidshow',
       component:theeidshow
     },{
       path:"con",
       component:dyno_confessions,
       children:[
         {
           path:'add',
           component:dyno_confessions_add_confession
         },
         {
           path:'all',
           component:dyno_confessions_dashboard
         },
         {
           path:'perma/:slug',
           component:dyno_confessions_slug_view
         }
       ]
     }
    ]
  }

]



//create a router instance
const router= new VueRouter({
   routes
})

import {auth} from './assets/firestore';
import {db} from './assets/firestore';
router.beforeEach((to,from,next)=>{
  //check to see if route requires auth
  if(to.matched.some(rec=>rec.meta.requiresAuth)){
    console.log("the page we are going to requires auththentication");
    if(auth.currentUser){
      next();
      //current user is signed in proceed
    }else{
      next("/");
      //current user is not signed in do not let him through
    }
   }else{
    next();
  }
  
});



var app=null;

auth.onAuthStateChanged(auth=>{

  if(auth){
    //initialize user store details
    store.state.authRelated.isLoggedIn=true;
    //set to true since the user is signed in
    store.state.authRelated.loginDetails.profileMeta.uid=auth.uid;
    store.state.authRelated.loginDetails.profileMeta.email=auth.email;
    console.log(auth.uid);
    //need to connect to db to grab this info
    var usersCol= db.collection("users").where('uid','==', store.state.authRelated.loginDetails.profileMeta.uid=auth.uid);
    //grab currently signed in users details
    usersCol.get().then(doc=>{
      
      if(doc.empty){
        
        alert("something went wrong with out server. Please refresh your cookies and try to log in again");
        app= new Vue({
          el: '#app',
          router,
          store,
           render: h => h(App)
        })
      }else{
        doc.forEach(item=>{
          item=item.data();

          var additionaldata=item.optionalAdditionalData;


          const bio= additionaldata.bio;
          const birthday= additionaldata.birthday;
          const country= additionaldata.country;
          const fullname= additionaldata.fullname;
          const profileImage= additionaldata.profileImage;
          

          const website= additionaldata.website;
          const highlightedImages= additionaldata.highlightedImages;
          //pass the above data to store
          var optionaldata= store.state.authRelated.loginDetails.optionalAdditionalData;
          optionaldata.bio= bio;
          optionaldata.website= website;
          optionaldata.birthday=birthday;
          optionaldata.name= fullname;
          store.state.authRelated.loginDetails.profileImageURL= profileImage;
          optionaldata.profileImage=profileImage;
          optionaldata.location=country;
          optionaldata.highlightedImages=highlightedImages;

          console.log(store);
       
          const username= item.username;
          const slug= item.slug;
          const joinedDay= item.joinedDay;
          console.log(joinedDay);
        store.state.authRelated.loginDetails.profileMeta.username=username;
        store.state.authRelated.loginDetails.profileMeta.username_slug=slug;
        store.state.authRelated.loginDetails.optionalAdditionalData.joinedDay= joinedDay;
          
        if(app){
          //already initialized
        }else{
          app= new Vue({
            el: '#app',
            router,
            store,
             render: h => h(App)
          })
        }
  
        })
      }
     
      
    }).catch(err=>{
      //error 
      console.log(err);
    })
    

 
  }else{
    //no user is signed in so no need to initliaze details
       
  if(app){
    //already initialized
  }else{
    app= new Vue({
      el: '#app',
      router,
      store,
       render: h => h(App)
    })
  }
  }

 

})
 
 
