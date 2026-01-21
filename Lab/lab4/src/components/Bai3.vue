<template>
    <!-- Hiển thị lời chào -->
    <h1>{{ greeting }}</h1>

    <button v-bind:title="buttonTitle" @click="changeGreeting">
        bạn có muốn đổi lời chào mới</button>
</template>
<script>
export default {
    data() {
        return {
            greeting: 'Xin chào bạn!',
            buttonTitle: 'Nhấn để thay đổi lời chào'
        };
    },
    methods: {
        changeGreeting() {
            this.greeting = 'Hello, World!';
            this.buttonTitle = 'Lời chào mới đã được cập nhật';
        }
    }
}
</script>