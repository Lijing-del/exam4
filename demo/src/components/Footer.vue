<template>
  <div class="footer">
    <router-link to="/home">消息</router-link>
    <router-link to="/friend">好友</router-link>
    <router-link to="/my">空间</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer a {
  text-decoration: none;
  font-size: 18px;
}
</style>