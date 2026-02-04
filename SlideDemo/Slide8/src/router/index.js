import { createRouter, createWebHistory } from 'vue-router'

// 1. IMPORT CÁC COMPONENT (Sửa lỗi "Home is not defined" tại đây)
// Lưu ý: Đảm bảo tên file trong thư mục views viết hoa chữ cái đầu (VD: Home.vue, UserDetail.vue)
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import UserDetail from '../views/UserDetail.vue'

// 2. ĐỊNH NGHĨA CÁC ROUTES
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    // Dynamic Route: Nhận tham số id từ URL (VD: /user/123)
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserDetail
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
]

// 3. KHỞI TẠO ROUTER
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {

        const token = localStorage.getItem('authToken');

        if (!token) {
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router