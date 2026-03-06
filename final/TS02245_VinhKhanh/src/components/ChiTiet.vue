<template>
    <div v-if="displayItem" class="card shadow-sm border-primary">
        <div class="card-header bg-primary text-white fw-bold">
            Thông tin chi tiết
        </div>
        <div class="card-body">
            <h5 class="card-title text-danger">{{ displayItem.name }}</h5>
            <p class="mb-1"><strong>Tác giả / Hãng:</strong> {{ displayItem.author || displayItem.brand }}</p>
            <p class="mb-1"><strong>Mức độ:</strong> {{ displayItem.level }}</p>
            <p class="mb-1"><strong>Thời lượng / HSD:</strong> {{ displayItem.time || displayItem.exp }}</p>
            <p class="mb-3"><strong>Giá / Học phí:</strong> {{ displayItem.fee || displayItem.price }} VND</p>

            <button class="btn btn-warning fw-bold w-100" @click="xuLyEmit">
                {{ displayItem.fee ? 'Ghi danh ngay' : 'Nhập kho' }}
            </button>
        </div>
    </div>

    <div v-else class="alert alert-secondary text-center">
        👈 Vui lòng chọn một mục bên trái
    </div>
</template>

<script setup>
import { computed } from 'vue'
// import { useRoute } from 'vue-router' // (Bỏ comment nếu xài Router)

const props = defineProps({
    item: Object,     // Dành cho Phương án 1 (App.vue truyền thẳng 1 object xuống)
    listData: Array   // Dành cho Phương án 2 (App.vue truyền cả mảng qua router-view)
})

const emit = defineEmits(['action-click'])

// --- XỬ LÝ LẤY DATA CHO HIỂN THỊ ---
const displayItem = computed(() => {
    // Nếu dùng Phương án 1 (Truyền Prop trực tiếp):
    return props.item

    /* // Nếu dùng Phương án 2 (Vue Router):
    const route = useRoute()
    if (route.params.id && props.listData) {
      return props.listData.find(x => x.id === route.params.id)
    }
    return null
    */
})

// --- XỬ LÝ NÚT BẤM EMIT ---
const xuLyEmit = () => {
    if (!displayItem.value) return

    // Đề 03: Gửi học phí (fee) về cha
    if (displayItem.value.fee) {
        emit('action-click', displayItem.value.fee)
    }
    // Đề 01: Gửi tên (name) về cha
    else {
        emit('action-click', displayItem.value.name)
    }
}
</script>