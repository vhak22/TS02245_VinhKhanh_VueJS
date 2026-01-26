<template>
  <div class="p-5">
    <input v-model="userInput" class="form-control" placeholder="Nhập dữ liệu vào đây" />
    <p class="mt-2">Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const userInput = ref('FPL'); // Giá trị mặc định là 'FPL' [cite: 3253]
</script>