require("./bootstrap");

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

window.Vue = require("vue").default;
import moment from "moment";
import { Form, Errors } from "vform";

// Progress bar
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    thickness: "3px",
});

// Vue.use(VueProgressBar, options);
// const options = {
//     color: "#bffaf3",
//     failedColor: "#874b4b",
//     thickness: "5px",
//     transition: {
//         speed: "3s",
//         opacity: "0.6s",
//         termination: 300,
//     },
//     autoRevert: true,
//     location: "left",
//     inverse: false,
// };

// ===========

window.Form = Form;
// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

import VueRouter from "vue-router";
import Vue from "vue";
// import routes from './routes'
// C:\laragon\www\example-app\node_modules\vform\src\components\bootstrap5
// node_modules\vform\src\components\bootstrap5

Vue.use(VueRouter);

const routes = [
    {
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default,
    },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default,
    },
    { path: "/users", component: require("./components/Users.vue").default },
];

// const router = new VueRouter(routes)

const router = new VueRouter({
    routes: routes,
    mode: "history",
});

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app",
    router,
});

Vue.filter("upText", function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function (created) {
    return moment(created).format("MMMM Do YYYY");
});
// import VeeValidate from "vee-validate";

// Vue.use(VeeValidate);
