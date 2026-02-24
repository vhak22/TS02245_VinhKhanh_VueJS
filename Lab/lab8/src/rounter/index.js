//import rounter
import { createRouter, createWebHistory } from 'vue-router'
//import các component
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'BlogList',
        component: BlogList
    },
    {
        path: '/blog/:id',
        name: 'BlogPost',
        component: BlogPost
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { authen: true }
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile,
        alias: 'me',
        children: [
            { path: '/info', name: 'UserProfileInfo', component: UserProfileInfo },
            { path: '/settings', name: 'UserProfileSettings', component: UserProfileSettings }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.authen) && !isAuthenticated) {

        if (!isAuthenticated) {
            next({ path: '/login' });
        } else {
            next();
        }
    } else {
        next();
    }
})
export default router;
