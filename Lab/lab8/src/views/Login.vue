<template>
    <div>
        <h1>Đăng nhập</h1>
        <p v-if="error" style="color: red;">{{ error }}</p>
        <button @click="handleLogin">Đăng nhập ngay</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const error = ref('');

const handleLogin = () => {
    // Giả lập đăng nhập thành công: Lưu trạng thái vào localStorage
    localStorage.setItem('isAuthenticated', 'true');

    // Chuyển hướng đến Dashboard sau khi đăng nhập [cite: 157]
    router.push({ name: 'Dashboard' });
};
</script>