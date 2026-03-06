<template>
  <div id="app">
    <nav style="padding: 20px; background-color: #f0f0f0; margin-bottom: 20px;">
      <router-link to="/">Trang chủ</router-link> |
      <router-link to="/blog">Danh sách Blog</router-link> |
      <router-link :to="{ name: 'UserProfile1' }">Hồ sơ (/profile)</router-link> |
      <router-link to="/me">Hồ sơ Alias (/me)</router-link> |
      <router-link to="/dashboard">Dashboard (Bảo vệ)</router-link> |
      <router-link to="/login">Đăng nhập</router-link>
    </nav>
    <main style="padding: 20px;">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
