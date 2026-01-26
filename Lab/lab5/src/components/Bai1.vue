<template>
    <div class="p-5">
        <h1>{{ message }}</h1>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
</template>

<script setup>// Thêm chữ setup ở đây
import { ref } from 'vue';

const message = ref('Đây là bài tập để hiểu về one-way data binding');
const updateMessage = () => {
    message.value = 'one-way data binding là cơ chế dữ liệu chỉ chạy 1 chiều duy nhất từ model đến view';
};  
</script>

<style></style>