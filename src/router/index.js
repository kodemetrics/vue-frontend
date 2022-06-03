import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import auth from '@/middleware/auth'
import middlewarePipeline from '@/middleware/middlewarePipeline'


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { middleware: [auth, auth] },
        },

        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { middleware: [auth, auth] },
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
        },

    ],
})




router.beforeEach((to, from, next) => {
    // const publicPages = ['/login', '/register'];
    // const authRequired = !publicPages.includes(to.path);
    // const loggedIn = localStorage.getItem('user');

    // if (authRequired && !loggedIn) {
    //     return next('/login');
    // }
    // next();

    const middleware = to.meta.middleware;
    const context = { to, from, next };
    if (!middleware) {
        return next();
    }

    //return middleware[0]({...context });
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
});

export default router