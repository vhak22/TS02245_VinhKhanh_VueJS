<template>
    <div class="m-5 col-sm-4 shadow p-4">
        <h2>Đăng Nhập</h2>
        <form @submit.prevent="handleLogin">
            <input type="text" class="form-control mb-2" v-model="username" placeholder="Tên đăng nhập" />
            <input type="password" class="form-control mb-2" v-model="password" placeholder="Mật khẩu" />
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const emit = defineEmits(['loggedIn']);

function handleLogin() {
    if (username.value && password.value) {
        emit('loggedIn', username.value); // Phát sự kiện lên cha [cite: 468]
    }
}
</script>