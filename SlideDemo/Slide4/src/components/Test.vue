<template>
  <div class="container mt-4">
    <h3>Nhập năm sinh (Sử dụng const)</h3>
    
    <input 
      type="number" 
      v-model.number="namSinh" 
      class="form-control mb-3" 
      placeholder="Nhập năm sinh..."
    />

    <div v-if="namSinh > 0">
      <p><strong>Năm sinh:</strong> {{ namSinh }}</p>
      <p><strong>Tuổi:</strong> {{ tinhTuoi() }}</p>
      <p><strong>Phân loại:</strong> {{ phanLoaiTuoi() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const namSinh = ref(null);
const namHienTai = 2026;


const tinhTuoi = () => {
  return namHienTai - namSinh.value;
};

const phanLoaiTuoi = () => {
  const tuoi = tinhTuoi();
  if (tuoi <= 12) return "Trẻ em";
  if (tuoi <= 18) return "Thiếu niên";
  if (tuoi <= 35) return "Thanh niên";
  if (tuoi <= 60) return "Trung niên";
  return "Lớn tuổi";
};
</script>