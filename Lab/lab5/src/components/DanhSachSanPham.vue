<template>
  <div class="row">
    <h2 class="mb-4 text-center text-primary">Danh Sách Linh Kiện</h2>

    <div v-for="(item, index) in products" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-header bg-transparent border-success">
          <h5 class="card-title text-success mb-0 text-truncate" :title="item.name">
            {{ item.name }}
          </h5>
        </div>

        <div class="card-body d-flex flex-column">
          <h6 class="card-subtitle mb-3 text-muted">
            Giá: <span class="fw-bold text-danger">{{ item.price.toLocaleString() }} VND</span>
          </h6>

          <button @click="toggleDetails(index)" class="btn btn-info btn-sm text-white mt-auto">
            {{ showDetails[index] ? "Ẩn chi tiết" : "Xem chi tiết" }}
          </button>

          <div v-show="showDetails[index]" class="card-text mt-3 p-2 bg-light rounded border">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps } from 'vue';

// 1. Nhận dữ liệu từ cha truyền xuống (giống Lab 5 trang 7)
defineProps({
  products: {
    type: Array,
    default: () => []
  }
}); // 

// 2. Quản lý trạng thái hiển thị chi tiết
const showDetails = reactive({});

function toggleDetails(index) {
  showDetails[index] = !showDetails[index];
}
</script>