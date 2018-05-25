/*
Author Muhammed T Javed
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

import dynoCreate from './assets/Dynamic/codeModules/create.vue';
import dynoCreateRandomFact from './assets/Dynamic/createPages/createRandomFact.vue';
import dynoHome from './assets/Dynamic/_mainDirectives/home.vue';
//import dynamic pages above

import dynoModuler from './assets/Dynamic/codeModules/moduler.vue';
import dynoCryptoFolio from './assets/Dynamic/app/CryptoFolio/main.vue'
//cryptofolio module impoted
import dynamicComponent from './assets/Dynamic/codeModules/randomFact.vue';
//import dynamic components

Vue.component("randomFact",dynamicComponent);
 
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
    children:[{
      path:'cryptofolio',
      component:dynoCryptoFolio
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
