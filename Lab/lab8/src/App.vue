<template>
  <nav>
    <router-link to="{ name: 'Home' }">Home</router-link> |
    <router-link to="{ name: 'BlogList' }">Blog</router-link> |
    <router-link to="{ name: 'UserProfile' }">Profile</router-link> |
    <router-link to="/me">My Alias (Me)</router-link> |
    <router-link to="{ name: 'Dashboard' }">Dashboard (Protected)</router-link> |
    <router-link to="{ name: 'Login' }">Login</router-link>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style>
nav {
  padding: 20px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}
</style>