<template>
    <div class="col-sm-8 mx-auto p-4">
        <h2 class="mb-3">Bình luận bài viết</h2>

        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Bài viết: Học VueJS cơ bản</h5>
                <p class="card-text">
                    VueJS là một Framework JavaScript linh hoạt, dễ học và mạnh mẽ để xây dựng giao diện người dùng...
                </p>
            </div>
        </div>

        <form @submit.prevent="submitComment" class="mb-4">
            <div class="mb-3">
                <label class="form-label">Viết bình luận của bạn <strong>({{ username }})</strong>:</label>
                <textarea class="form-control" v-model="commentText" rows="3" required></textarea>
            </div>
            <button class="btn btn-primary">Gửi bình luận</button>
        </form>

        <div v-if="comments.length > 0">
            <h5>Danh sách các bình luận:</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item, index) in comments" :key="index">
                    <strong>{{ item.author }}:</strong> {{ item.content }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận props từ cha
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);

function submitComment() {
    if (commentText.value.trim()) {
        comments.value.push({
            author: props.username,
            content: commentText.value
        });
        commentText.value = ''; // Reset ô nhập
    }
}
</script>