import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LodingView from '../views/LodingView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "login"
  },
  {
    path: "/home",
    name: "home",
    redirect:"/home/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../views/home/Index.vue"),
      },
      {
        path: "document",
        name: "document",
        component: () => import("../views/Document.vue"),
      },
      {
        path: "lead",
        name: "lead",
        component: () => import("../views/Lead.vue"),
      }
    ],
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LodingView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 路由守卫中千万不要使用 for 循环
  if (to.name === "login") {
    // 登录面不设权限
    next()  //中间件
  } else {
    // 有权限的人
    let token = localStorage.getItem("token")
    if (token) {
      next()
    } else {
      //没有权限
      next({ name: "login" })
    }
  }


})
export default router;
