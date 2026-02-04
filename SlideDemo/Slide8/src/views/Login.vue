<template>
    <div>
        <h1>Đăng nhập</h1>
        <button @click="handleLogin">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
            // Lưu token giả vào localStorage để xác thực
            localStorage.setItem('authToken', '123456');
            alert("Đăng nhập thành công!");
            // Điều hướng bằng code (Programmatic Navigation) [cite: 431]
            this.$router.push('/dashboard');
        }
    }
}
</script>