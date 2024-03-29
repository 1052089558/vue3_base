import { createRouter, createWebHistory } from "vue-router";
import Layout from '../layout/index.vue'
const routes = [
    {
        path: "/",
        name: "home",
        component: Layout,
        children: [
            {
                path: "home",
                name: "Home",
                component: () => import('../views/home/index.vue')
              
            }
        ]
    },  
  
 
];
 
const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
export default router;