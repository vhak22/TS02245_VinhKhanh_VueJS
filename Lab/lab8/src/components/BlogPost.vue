<template>
    <div>
        <h2>Chi tiết bài viết</h2>
        <p>Bạn đang xem nội dung của bài viết có ID: {{ $route.params.id }}</p>
        <button @click="goBack">Quay lại danh sách</button>
    </div>
</template>

<script>
export default {
    name: 'BlogPost',
    methods: {
        goBack() {
            this.$router.push({ name: 'BlogList' });
        }
    }
}
</script>