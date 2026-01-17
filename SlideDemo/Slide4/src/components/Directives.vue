<template>
    <div>
        <h1>17 Nguyen Dai Vinh Khanh</h1>
        <div>
            <input type="text" name="" v-bind:value="content">
        </div>
       
    </div>
</template>

<script>
    export default{
        data() {
            return {
                content: 'chào quí zị',
                
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