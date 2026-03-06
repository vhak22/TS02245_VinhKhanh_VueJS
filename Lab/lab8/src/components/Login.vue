<template>
    <div>
        <h2>Đăng nhập</h2>
        <button @click="login">Đăng nhập ngay</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        login() {
            // Cập nhật biến giả lập trạng thái đăng nhập vào localStorage
            localStorage.setItem('isAuthenticated', 'true');
            alert('Đăng nhập thành công!');
            // Điều hướng bằng code
            this.$router.push({ name: 'Dashboard' });
        }
    }
}
</script>