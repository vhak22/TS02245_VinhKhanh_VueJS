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

<style></style>