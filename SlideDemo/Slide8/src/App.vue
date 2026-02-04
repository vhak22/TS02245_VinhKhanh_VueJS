<template>

  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/user/123">User Profile (Dynamic)</RouterLink> |
    <RouterLink to="/dashboard">Dashboard (Protected)</RouterLink> |
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <h1>17 Nguyen Dai Vinh Khanh</h1>
  <main>
    <RouterView />
  </main>
</template>

<style>
nav {
  padding: 30px;
  background-color: #f0f0f0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  /* Vue green */
}
</style>