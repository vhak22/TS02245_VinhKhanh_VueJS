<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-sm-4">
                <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label>Họ tên:</label>
                        <input type="text" class="form-control" v-model="student.name" required />
                    </div>
                    <div class="mb-3">
                        <label>Điểm:</label>
                        <input type="number" max="10" min="0" class="form-control" v-model="student.score" required />
                    </div>
                    <div class="mb-3">
                        <label>Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="student.dob" required />
                    </div>
                    <button type="submit" class="btn" :class="isEditing ? 'btn-primary' : 'btn-success'">
                        {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                    </button>
                    <button v-if="isEditing" type="button" class="btn btn-secondary ms-2"
                        @click="resetForm">Hủy</button>
                </form>
            </div>

            <div class="col-sm-8">
                <h3>Danh sách học sinh</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu mẫu ban đầu [cite: 181-184]
const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// Biến quản lý form
const student = ref({ name: '', score: null, dob: '' });
let isEditing = ref(false);
let editingIndex = ref(null);

// Xử lý Thêm hoặc Cập nhật [cite: 197-209]
function submitForm() {
    if (isEditing.value) {
        // Cập nhật
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        // Thêm mới
        students.value.push({ ...student.value });
    }
    resetForm();
}

// Chức năng Sửa [cite: 211-215]
function editStudent(index) {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

// Chức năng Xóa [cite: 216-218]
function deleteStudent(index) {
    if (confirm("Bạn có chắc muốn xóa học sinh này không?")) {
        students.value.splice(index, 1);
    }
}

// Reset Form [cite: 219-224]
function resetForm() {
    student.value = { name: '', score: null, dob: '' };
    isEditing.value = false;
    editingIndex.value = null;
}
</script>