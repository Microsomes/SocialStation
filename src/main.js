/*
Author Muhammed T Javed
- Alpha 1 of Social station.
Social station is an open souce modular social media platform.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueTyperPlugin from 'vue-typer'

 
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueTyperPlugin)
 
 
 


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
    component:dynoHome
  },
  {
    path:'/profile',
    component:myProfilePage,
    name:'myprofile'
  },
  {
    path:'/dashboard',
    component:dynoHome,
    name:'dashboard'
  },
  {
    path:'/',
    component:dynoEntry
  },
  {
    path:'/help',
    component:staticHelp
  },
  {
    path:'/rules',
    component:staticRules
  },
  {
    path:'/create',
    component:dynoCreate,
    children:[{
      path:'fact',
      component:dynoCreateRandomFact
    }
    ]
  },
  {
    path:'/codeModule',
    component:dynoModuler,
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
     }
    ]
  }

]

//create a router instance
const router= new VueRouter({
  routes
})


 
new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App)
})
