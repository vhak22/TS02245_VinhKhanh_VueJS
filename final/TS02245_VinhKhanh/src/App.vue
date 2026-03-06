<template>
  <div class="container mt-4">
    <h2 class="mb-4">Hệ Thống Quản Lý (SOF308)</h2>

    <div class="mb-3">
      <input v-model="searchKey" type="text" class="form-control" placeholder="Tìm kiếm khóa học/sản phẩm..." />
    </div>

    <div v-if="thongBao" class="alert alert-success fw-bold">
      {{ thongBao }}
    </div>

    <div class="row">
      <div class="col-5">
        <DanhSach :items="filteredList" :selectedId="selectedItem?.id" @select-item="handleSelect" />
      </div>

      <div class="col-7">
        <ChiTiet :item="selectedItem" @action-click="handleAction" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import db from './db.json' // Import dữ liệu JSON [cite: 62]
import DanhSach from './components/DanhSach.vue'
import ChiTiet from './components/ChiTiet.vue'

// Các state (trạng thái) quản lý dữ liệu
const listData = ref(db)
const searchKey = ref('')
const selectedItem = ref(null) // Chứa item đang click (Dùng cho Phương án 1)

// Các state xử lý logic Yêu cầu 4 [cite: 21, 74]
const thongBao = ref('')
const totalCart = ref(0) // Quản lý tổng tiền học phí 

// YÊU CẦU 5: Tìm kiếm (Computed tự động lọc danh sách) 
const filteredList = computed(() => {
  return listData.value.filter(item =>
    item.name.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})

// Lắng nghe sự kiện từ DanhSach.vue (Dùng cho Phương án 1)
const handleSelect = (item) => {
  selectedItem.value = item
}

// YÊU CẦU 4: Xử lý sự kiện Emit từ ChiTiet.vue bắn lên [cite: 21, 74]
const handleAction = (payload) => {
  // Payload có thể là giá tiền (Đề 03) hoặc tên sản phẩm (Đề 01)
  if (typeof payload === 'number') {
    totalCart.value += payload
    thongBao.value = `Đã ghi danh! Tổng học phí: ${totalCart.value} VND` // [cite: 74]
  } else {
    thongBao.value = `Vừa nhập thêm hàng cho: ${payload}` // [cite: 21]
  }
}
</script>