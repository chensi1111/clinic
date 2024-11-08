import { createRouter, createWebHashHistory } from "vue-router";

const index = () => import("../pages/index.vue");
const home =()=>import("../components/homePage.vue");
const category=()=>import("../pages/category.vue")
const info =()=>import("../pages/info.vue")

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children: [
      {
        path: "/", 
        name: "home",
        component: home,
      },
      {
        path: "/category/:id", 
        name: "category",
        component: category,
        props: true,
        children:[
          {
            path: "/category/:id/:info", 
            name:"info",
            component:info,
            props: true,
          }
        ]
      },
    ]
  }
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); 
  next(); 
});
