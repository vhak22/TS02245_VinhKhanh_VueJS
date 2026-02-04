<template>
    <div>
        <h1>Dashboard (Cần đăng nhập mới xem được)</h1>
        <button @click="handleLogout">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            localStorage.removeItem('authToken');
            this.$router.push('/login');
        }
    }
}
</script>