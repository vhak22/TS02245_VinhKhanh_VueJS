<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-sm-6">
                <h3>Form Đăng Ký</h3>
                <div class="mb-3">
                    <label>Họ tên:</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="mb-3">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <div class="mb-3">
                    <label>Ngày sinh:</label>
                    <input type="date" class="form-control" v-model="user.dob">
                </div>
                <div class="mb-3">
                    <label>Giới tính:</label><br>
                    <input type="radio" value="Nam" v-model="user.gender"> Nam
                    <input type="radio" value="Nữ" v-model="user.gender" class="ms-2"> Nữ
                </div>
                <div class="mb-3">
                    <label>Ngôn ngữ:</label><br>
                    <input type="checkbox" value="Tiếng Việt" v-model="user.lang"> Tiếng Việt
                    <input type="checkbox" value="Tiếng Anh" v-model="user.lang" class="ms-2"> Tiếng Anh
                </div>
            </div>

            <div class="col-sm-6 border-start">
                <h3>Thông tin đã đăng ký:</h3>
                <p><b>Họ tên:</b> {{ user.name }}</p>
                <p><b>Email:</b> {{ user.email }}</p>
                <p><b>Ngày sinh:</b> {{ user.dob }}</p>
                <p><b>Giới tính:</b> {{ user.gender }}</p>
                <p><b>Ngôn ngữ:</b> {{ user.lang.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const user = reactive({
    name: 'Tèo',
    email: 'tien@gmail.com',
    dob: '2024-08-30',
    gender: 'Nam',
    lang: ['Tiếng Việt']
});
</script>