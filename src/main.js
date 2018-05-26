/*
Author Muhammed T Javed
- Alpha 1 of Social station.
Social station is an open souce modular social media platform.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuetify from 'vuetify'
 
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import staticRules from './assets/Static/rules.vue';
import staticHelp from './assets/Static/help.vue';
//import static pages above


import dynoMainFeed from './assets/Dynamic/codeModules/MainFeed.vue';
import dynoAnimationLiner from './assets/Dynamic/ModularComponents/topNavAnimationLiner.vue';
import dynoCreate from './assets/Dynamic/codeModules/create.vue';
import dynoCreateRandomFact from './assets/Dynamic/createPages/createRandomFact.vue';
import dynoHome from './assets/Dynamic/_mainDirectives/home.vue';
//import dynamic pages above

import dynoNews from './assets/Dynamic/app/News/main.vue';
//import news dyno

import dynoModuler from './assets/Dynamic/codeModules/moduler.vue';
import dynoCryptoFolio from './assets/Dynamic/app/CryptoFolio/main.vue'
//cryptofolio module impoted
import dynamicComponent from './assets/Dynamic/codeModules/randomFact.vue';
//import dynamic components

Vue.component("randomFact",dynamicComponent);
Vue.component("animLiner",dynoAnimationLiner);
//registering vue components above
const routes=[
  {
    path:'/',
    component:dynoHome
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
      path:'cryptofolio',
      component:dynoCryptoFolio
     },
     {
       path:'feed',
       component:dynoMainFeed
     },
     {
       path:'news',
       component:dynoNews
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
   render: h => h(App)
})
