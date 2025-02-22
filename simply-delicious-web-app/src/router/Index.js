import { createRouter,createWebHistory } from "vue-router";

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:()=>import("../views/Home.vue")
        },
        {
            path:"/recipes",
            name:"Recipes",
            component:()=>import("../views/Recipes.vue")
        },
        {
            path:"/recipes-catalog",
            name:"Catalog",
            component:()=>import("../views/RecipesCatalog.vue")
        }
    ]
})

export default router;