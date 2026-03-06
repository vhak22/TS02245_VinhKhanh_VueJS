<template>
    <div>
        <h2>Bảng điều khiển (Dashboard)</h2>
        <p>Chào mừng! Bạn chỉ thấy trang này vì bạn đã đăng nhập.</p>
        <button @click="logout">Đăng xuất</button>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        logout() {
            localStorage.removeItem('isAuthenticated');
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>