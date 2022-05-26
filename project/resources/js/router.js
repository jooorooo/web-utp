//https://router.vuejs.org/guide/#javascript
//import Home from '@components/home.vue';

const routes = [
//  { path: '/', component: Home, name: "home" },
//  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(router)