
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Login from "../views/login/index.vue";
// @ts-ignore
import {createRouter ,createWebHistory} from "vue-router";
// @ts-ignore
import Dashboard from "@/views/dashboard/index.vue";
// @ts-ignore
import dashboard from "./modules/dashboard.ts";
// @ts-ignore
const  routes=[
    {path:'/login',component: Login,name:'Login',meta:{
            title:'登录'
        }},
    {path:'/',component: Home},


]
// @ts-ignore
const baseRoutes=[...routes,...dashboard]


// @ts-ignore
export const  router=createRouter({
    history:createWebHistory(),
    routes:baseRoutes
})
router.beforeEach((to,from,next)=>{
    console.log(to, from);
    console.log(to.meta.title);
    document.title=(to?.meta?.title as string)||document.title;

      if(to.name!='login'){
          //判断是否登录
        if( !localStorage.getItem('token')){
            //往登录页面去跳
            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
      }
    next()
})