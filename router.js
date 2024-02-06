import { createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        name: "home",
        component: HomePage,
    },
    ],
    
});

export { router };