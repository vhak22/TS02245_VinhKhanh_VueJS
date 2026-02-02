<!-- <template>
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

//vinhkhanh: dữ liệu đầu vào
const students = ref([
    { name: 'Trần Quang Bình', score: 10, dob: '1999-1-10' },
    { name: 'Nguyễn Đài Vĩnh Khánh', score: 9, dob: '2006-05-15' },
]);

//vinhkhanh: khai báo biến qly form
const student = ref({ name: '', score: null, dob: '' });
let isEditing = ref(false);
let editingIndex = ref(null);

// Xử lý Thêm hoặc Cập nhật
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

// Chức năng Xóa
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
</script> -->
<template>
    <div class="container p-4" style="max-width: 400px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 class="text-center text-danger mb-4">17 Nguyễn Đài Vĩnh Khánh</h3>

        <div class="mb-3">
            <label class="form-label fw-bold">Số lượng:</label>
            <input type="number" v-model="quantity" class="form-control" placeholder="Nhập số lượng...">
            <label class="form-label fw-bold">
                <p v-if="quantity >= 10">Được giảm giá 10%</p>
                <p v-else>Không được giảm giá</p>
            </label>
        </div>

        <div class="mb-3">
            <label class="form-label fw-bold">Đơn giá:</label>
            <input type="number" v-model="price" class="form-control" placeholder="Nhập giá tiền...">
        </div>
        <hr>

        <div class="alert alert-primary text-center">
            <h5>Thành tiền:</h5>
            <h2 class="fw-bold">{{ getFinalTotal() }}</h2>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(0);
const price = ref(0);


function getFinalTotal() {
    let total = quantity.value * price.value;

    if (quantity.value >= 10) {
        total = total * 0.9;
    }

    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(total);
}
</script>