<template>
    <div>
        <h1>Dashboard (Bảng điều khiển)</h1>
        <p>Chào mừng bạn! Nội dung này chỉ dành cho người đã đăng nhập.</p>
        <button @click="logout">Đăng xuất</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const logout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push({ name: 'Login' });
}
</script>