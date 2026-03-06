<template>
    <div>
        <h2>Thông tin người dùng</h2>
        <nav>
            <router-link to="/profile/info">Thông tin cơ bản</router-link> |
            <router-link to="/profile/settings">Cài đặt</router-link>
        </nav>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default { name: 'UserProfile' }
</script>