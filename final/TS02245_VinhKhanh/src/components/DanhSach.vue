<template>
    <div class="card p-2 shadow-sm">
        <h5 class="text-center">Danh sách</h5>
        <ul class="list-group">
            <li v-for="item in items" :key="item.id" class="list-group-item list-group-item-action cursor-pointer"
                :class="{
                    'fw-bold text-primary': selectedId === item.id || currentRouteId === item.id
                    // YÊU CẦU 4 (Đề 03): In đậm, chữ xanh khi đang chọn 
                }" @click="handleClick(item)">
                {{ item.name }}

                <span v-if="selectedId === item.id || currentRouteId === item.id"
                    class="badge bg-primary text-light float-end">
                    Đang xem
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue'
// import { useRouter, useRoute } from 'vue-router' // (Bỏ comment nếu xài Router)

const props = defineProps({
    items: Array,
    selectedId: String // ID nhận từ cha (Phương án 1)
})

const emit = defineEmits(['select-item'])

// (Dành cho Phương án 2 - Router) Lấy ID từ URL hiện tại để bôi màu
// const route = useRoute()
const currentRouteId = computed(() => null) // Đổi thành: computed(() => route.params.id) nếu dùng Router

// (Dành cho Phương án 2 - Router) Chuyển trang
// const router = useRouter()

const handleClick = (item) => {
    // --- PHƯƠNG ÁN 1 (ĐỀ 01): Bắn Emit trực tiếp ---
    emit('select-item', item)

    // --- PHƯƠNG ÁN 2 (ĐỀ 03): Đẩy URL bằng Router  ---
    // router.push(`/chitiet/${item.id}`)
}
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>