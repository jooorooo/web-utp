import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

//https://router.vuejs.org/guide/#javascript
//import Home from '@components/home.vue';

const routes = [
	{ path: '/', component: Home, name: "home" },
	{ path: '/about', component: About, name: "about" },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;