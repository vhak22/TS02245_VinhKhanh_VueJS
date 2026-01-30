<template lang="">
    <div>
        <h1 @click.right = "handleClick">17 Slide7</h1>
        <input type="" name="" v-model="Myname" v-on:keyup.enter.67 ="handleClick">
    </div>
</template>
<script setup>
import { ref } from 'vue';
const Myname = ref('')
const handleClick = () => {
    alert(Myname.value);
}
</script>
<style lang="">

</style>