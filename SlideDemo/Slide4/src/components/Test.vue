<script>
export default {
  data() {
    return {
      count: 0
    }
  }, // <--- Nhớ dấu phẩy ở đây để ngăn cách data và methods
  methods: {
    reset() {
      this.count = 0
    },
    increment() {
      this.count++
    }
  }
}
</script>
<template>
 
    <h1>Hello Cả Nhà Nhế</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="reset">Reset</button>
</template>

<style scoped>

</style>
