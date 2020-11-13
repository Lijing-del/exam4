<template>
  <div class="home">
    <header>消息</header>
    <main>
      <dl v-for="(item,index) in list" :key="index">
        <dt>
          <img :src="item.img" alt />
        </dt>
        <dd>
          <h2>{{item.title}}</h2>
          <p>{{item.info}}</p>
        </dd>
      </dl>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/api/list").then((res) => {
        this.list = res.data;
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.home main {
  flex: 1;
  overflow: scroll;
}
</style>