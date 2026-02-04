<template>
    <div class="col-sm- p-5 mx-auto border rounded shadow-sm">
        <div v-if="!isLoggedIn">
            <h3 class="text-center">Form Đăng nhập</h3>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label class="form-label ">Email:</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                    <p v-if="emailError" style="color: red;">{{ emailError }}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Mật khẩu:</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                    <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
                </div>
            </form>
        </div>

        <div v-else class="text-center">
            <h3>Chào mừng, {{ email }}!</h3>
            <button @click="logout" class="btn btn-primary mt-3">Đăng xuất</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function login() {
    // Reset lỗi
    emailError.value = '';
    passwordError.value = '';

    // Validate
    if (!email.value) {
        emailError.value = 'Email là bắt buộc.';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Email không hợp lệ.';
    }

    if (!password.value) {
        passwordError.value = 'Mật khẩu là bắt buộc.';
    }

    // Nếu không có lỗi thì login thành công
    if (!emailError.value && !passwordError.value) {
        isLoggedIn.value = true;
    }
}

function logout() {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
}
</script>