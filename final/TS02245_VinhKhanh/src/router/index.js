import { createRouter, createWebHistory } from 'vue-router'
import ChiTiet from '../components/ChiTiet.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/chitiet/:id', component: ChiTiet } // Định nghĩa tham số động :id
    ]
})