<template>
    <div class="card p-4 mb-4 shadow-sm">
        <h3 class="text-primary mb-3">Thêm Linh Kiện Mới</h3>
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label">Tên sản phẩm</label>
                <input v-model="newProduct.name" type="text" class="form-control" placeholder="Ví dụ: CPU Intel..." />
            </div>

            <div class="col-md-6">
                <label class="form-label">Giá tiền (VND)</label>
                <input v-model.number="newProduct.price" type="number" class="form-control"
                    placeholder="Ví dụ: 5000000" />
            </div>

            <div class="col-12">
                <label class="form-label">Mô tả chi tiết</label>
                <textarea v-model="newProduct.description" class="form-control" rows="2"
                    placeholder="Nhập mô tả sản phẩm..."></textarea>
            </div>

            <div class="col-12 text-end">
                <button @click="submitForm" class="btn btn-success">Thêm sản phẩm</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';

// 1. Khai báo sự kiện custom 'add-product' để bắn ra ngoài (giống Lab 5 trang 6)
const emit = defineEmits(['add-product']); // 

// 2. Sử dụng reactive cho form nhập liệu
const newProduct = reactive({
    name: '',
    price: null,
    description: ''
});

// 3. Hàm xử lý khi nhấn nút Thêm
const submitForm = () => {
    if (newProduct.name && newProduct.price) {
        // Bắn sự kiện lên cha kèm theo dữ liệu mới
        emit('add-product', { ...newProduct }); // [cite: 171]

        // Reset form sau khi gửi
        newProduct.name = '';
        newProduct.price = null;
        newProduct.description = '';
    } else {
        alert('Vui lòng nhập tên và giá sản phẩm!');
    }
};
</script>