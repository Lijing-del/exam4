<template>
  <div class="friend">
    <header>好友</header>
    <main>
        滴滴
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Friend",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.friend {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.friend main {
  flex: 1;
  overflow: scroll;
}
</style>