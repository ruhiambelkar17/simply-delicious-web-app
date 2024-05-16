import { createRouter,createWebHistory } from "vue-router";

export default route= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:()=>import("./views/Home.vue")
        }
    ]
})