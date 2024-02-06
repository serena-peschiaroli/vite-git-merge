import {createRouter, createWebHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';
import ShowCocktail from './pages/ShowCocktail.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/cocktails/:id",
        name: "show-cocktail",
        component: ShowCocktail,
    },
    ],
    
});

export{router};