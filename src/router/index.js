import { createRouter, createWebHistory } from 'vue-router';
// import Dashboard from '@/components/Dashboard';


const router = createRouter({
      history: createWebHistory(),
      routes: [
       {
            path: '/',
            //name: 'Dashboard',
            // component: Dashboard,
            // component:  () => import( '@/components/Dashboard.vue' ),
            //component:  () => import( '@/components/NavBar.vue' ),
            component:  () => import( '@/views/Home.vue' ),
            meta:{
                  title:'post',
                  icon:'post',
                  roles:['superadmin','admin']
            },
            children:[],
            
        },
        { 
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import( '@/views/NotFound.vue' ),
         } ,
      ],

});

export default router;