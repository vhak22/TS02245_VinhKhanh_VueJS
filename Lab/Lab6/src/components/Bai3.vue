<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card h-100">
                    <img :src="item.image" class="card-img-top" alt="Hình ảnh"
                        style="height: 200px; object-fit: cover;" />
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Tạo mảng dữ liệu mẫu (Mock data)
const items = ref([
    {
        title: '8 loại rau củ quả giàu canxi',
        content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...',
        image: 'https://cdn.tgdd.vn/Files/2021/11/02/1395171/8-loai-rau-cu-qua-giau-canxi-hon-ca-sua-202111021021484837.jpg'
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe',
        content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...',
        image: 'https://cdn.tgdd.vn/Files/2019/11/27/1222409/cac-loai-gia-vi-tot-cho-suc-khoe-201911271638289456.jpg'
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều',
        content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin...',
        image: 'https://cdn.tgdd.vn/Files/2021/08/25/1377855/9-loai-dau-bo-duong-nen-dung-nhieu-trong-mua-dich-202108251456073105.jpg'
    }
]);
</script>