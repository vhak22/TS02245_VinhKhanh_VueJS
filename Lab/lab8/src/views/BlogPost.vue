<template>
    <div>
        <h1>Chi tiết bài viết</h1>
        <p>Đang xem bài viết có ID: {{ $route.params.id }}</p>
        <button @click="goBack">Quay lại danh sách</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
    // Điều hướng lập trình [cite: 44]
    router.push({ name: 'BlogList' })
}
</script>