<template>
    <div class="p-3">
        <h3>Nhập điểm trung bình:</h3>
        <input type="number" v-model="score" min="0" max="10" class="form-control mb-2" />

        <div class="alert alert-info">
            <p v-if="score >= 11">Mời nhập lại</p>
            <p v-else-if="score >= 9">Xếp loại: Xuất sắc</p>
            <p v-else-if="score >= 8">Xếp loại: Giỏi</p>
            <p v-else-if="score >= 6.5">Xếp loại: Khá</p>
            <p v-else-if="score >= 5">Xếp loại: Trung bình</p>
            <p v-else>Xếp loại: Yếu</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(0);
</script>