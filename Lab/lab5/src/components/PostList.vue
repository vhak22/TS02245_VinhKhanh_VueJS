<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h2>Danh sách bài viết</h2>
            <button @click="toggleColor" class="btn btn-outline-primary btn-sm">
                {{ isColored ? 'Về màu gốc' : 'Đổi màu nền' }}
            </button>
        </div>

        <div v-for="(post, index) in posts" :key="index" class="post mb-3 p-3 border rounded"
            :class="{ 'highlighted': post.title.length > 20 }"
            :style="{ backgroundColor: isColored ? '#e3f2fd' : '#f9f9f9', transition: 'background-color 0.3s' }">

            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger">{{ post.author }}</h4>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script setup>
// 3. Import ref để tạo biến phản ứng (reactive)
import { ref } from 'vue';

defineProps({
    posts: { type: Array, required: true }
});

// 4. Khởi tạo trạng thái màu
const isColored = ref(false);

// 5. Hàm xử lý khi bấm nút
function toggleColor() {
    isColored.value = !isColored.value;
}
</script>

<style scoped>
.highlighted {
    border: 2px solid #28a745 !important;
}
</style>