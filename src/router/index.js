import { createRouter, createWebHashHistory } from "vue-router";

const index = () => import("../pages/index.vue");
const home =()=>import("../components/homePage.vue");
const biochemical =()=>import("../pages/biochemical.vue");
const dental =()=>import("../pages/dental.vue");
const medicalBeauty =()=>import("../pages/medicalBeauty.vue");
const other =()=>import("../pages/other.vue");
const precisionMedicine =()=>import("../pages/precisionMedicine.vue");
const regenerativeMedicine =()=>import("../pages/regenerativeMedicine.vue");

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
        path: "/biochemical", 
        name: "biochemical",
        component: biochemical,
      },
      {
        path: "/dental", 
        name: "dental",
        component: dental,
      },
      {
        path: "/medical-beauty", 
        name: "medicalBeauty",
        component: medicalBeauty,
      },
      {
        path: "/other", 
        name: "other",
        component: other,
      },
      {
        path: "/precision-medicine", 
        name: "precisionMedicine",
        component: precisionMedicine,
      },
      {
        path: "/regenerative-medicine", 
        name: "regenerativeMedicine",
        component: regenerativeMedicine,
      },
    ]
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
