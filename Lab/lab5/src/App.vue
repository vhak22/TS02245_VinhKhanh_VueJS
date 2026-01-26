<template>
  <div class="container mt-4">
    <h1 class="text-center">Lab 5 - Vĩnh Khánh</h1>
    <hr/>
    <Bai1 />
    <hr/>
    <Bai2 />
    <hr/>
    <Bai3 />
    <hr/>
    <div class="row">
        <CreatePost @add-post="addPost" />
        <PostList :posts="posts" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

const posts = ref([]);
const addPost = (post) => { posts.value.push(post); };
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
