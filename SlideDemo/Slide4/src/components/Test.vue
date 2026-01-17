<template>
  <div class="grid" style="--cols: 3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div class="grid" style="--cols: 5">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>6</div>
</div>

</template>
<style>
  .grid {
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  gap: 16px;
}
</style>
<script setup>
 
</script>