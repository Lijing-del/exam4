<template>
  <div class="home">
    <Header>消息</Header>
    <main>
      <p>
        <input type="text" placeholder="搜索" />
      </p>
      <dl v-for="(item,index) in list" :key="index" class="dls">
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
.dls {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: left;
}
.dls dd {
  margin-left: 10px;
}
</style>