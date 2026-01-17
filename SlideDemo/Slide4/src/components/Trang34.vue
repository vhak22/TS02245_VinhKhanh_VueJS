<template>
    <div>
        <h1>17 Nguyen Dai Vinh Khanh</h1>
        <h6 v-html="content" v-bind:style="styleData" v-bind:class="className"></h6>
        <h2>{{message}}</h2>
        <h2 v-html="number +5"></h2>
        <h2>{{sayHi()}}</h2>
        <button @click="change()">Thay đổi nội dung</button>
       
    </div>
</template>

<script>
    export default{
        data() {
            return {
                content: 'chào quí zị',
                message: 'Xin chào VueJS',
                number: 10,
                styleData: 'font-size: 5rem',
                className: 'text-red'
            }
        },
        methods: {
            sayHi(){
                return 'Đây là một phương thức'
            },
            sayHello(){
                this.message = 'Đã thay đổi'
            },
            change(){
                this.content = 'thay đổi content'

            }
        },
    }
</script>

<style>
    .text-red{
        color: rgb(255, 0, 13);
    }
</style>