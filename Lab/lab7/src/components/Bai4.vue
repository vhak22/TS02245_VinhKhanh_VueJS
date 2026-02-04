<template>
    <div class="container mt-5">
        <LoginComponent v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

        <CommentComponent v-else :username="currentUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

const isLoggedIn = ref(false);
const currentUser = ref('');

function handleLoginSuccess(user) {
    currentUser.value = user;
    isLoggedIn.value = true;
}
</script>