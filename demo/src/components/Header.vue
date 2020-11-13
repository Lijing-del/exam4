<template>
  <div class="header">
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header p {
  width: 100%;
  height: 40px;
  background-color: cornflowerblue;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
}
</style>