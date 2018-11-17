<template>
  <div class="home">
    <div class="router-views">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <tabbar>
      <tabbar-item selected @on-item-click="goto('homepage')">
        <i slot="icon" class="fa fa-home fa-lg"></i>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item show-dot @on-item-click="goto('information')">
        <i slot="icon" class="fa fa-comment-o fa-lg"></i>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item  @on-item-click="goto('mailist')">
        <i slot="icon" class="fa fa-address-book-o fa-lg"></i>
        <span slot="label">通讯</span>
      </tabbar-item>
      <tabbar-item  @on-item-click="goto('user')">
        <i slot="icon" class="fa fa-user fa-lg"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    // 自定义的函数
    goto: function(i) {
      console.log(i);
      // this.$router.push({ path: "./" + i });
    }
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 监听属性
  }
};
</script>

<style lang="less" scoped>
.home {
  background: #00e6ff;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .router-views {
    flex: 1;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
}
</style>

