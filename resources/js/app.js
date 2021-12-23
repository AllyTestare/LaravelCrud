require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.Vue = require('vue').default;
import { Form, Errors } from 'vform';

window.Form= Form;
// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

import VueRouter from 'vue-router';
import Vue from 'vue';
// import routes from './routes'
// C:\laragon\www\example-app\node_modules\vform\src\components\bootstrap5
// node_modules\vform\src\components\bootstrap5

Vue.use(VueRouter);

const routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/users', component: require('./components/Users.vue').default }
  ]

  
// const router = new VueRouter(routes)

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});




