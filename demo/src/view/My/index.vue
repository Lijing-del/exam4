<template>
  <div class="my">
    <Header>我的</Header>
    <main>哒哒</main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "My",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.my {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.my main {
  flex: 1;
  overflow: scroll;
}
</style>