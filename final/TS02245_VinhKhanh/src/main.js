import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Import router vừa tạo

// Import sẵn Bootstrap nếu bạn dùng qua npm
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
    .use(router) // 2. Kích hoạt router bằng .use()
    .mount('#app')