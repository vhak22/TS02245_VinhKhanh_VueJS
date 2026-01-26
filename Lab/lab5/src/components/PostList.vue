<template>
    <div>
        <h2>Danh sách bài viết</h2>
        <div v-for="(post, index) in posts" :key="index" class="post mb-3 p-3 border rounded"
            :class="{ 'highlighted': post.title.length > 20 }" :style="{ backgroundColor: '#f9f9f9' }">
            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger">{{ post.author }}</h4>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    posts: { type: Array, required: true }
});
</script>

<style scoped>
.highlighted {
    border: 2px solid #28a745 !important;
}
</style>