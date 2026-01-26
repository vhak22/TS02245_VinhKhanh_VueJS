<template>
  <div class="border p-3 mb-4">
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" class="form-control mb-2" />
    <input v-model="author" placeholder="Tên tác giả" class="form-control mb-2" />
    <textarea v-model="content" placeholder="Nội dung bài viết" class="form-control mb-2"></textarea>
    <button @click="submitPost" class="btn btn-primary">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['add-post']);

const title = ref('');
const author = ref('');
const content = ref('');

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      author: author.value,
      content: content.value
    };
    emit('add-post', newPost); // Gửi sự kiện [cite: 3377]
    title.value = ''; author.value = ''; content.value = ''; // Reset form [cite: 3379]
  }
}
</script>