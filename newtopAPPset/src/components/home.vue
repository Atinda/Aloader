<template>
  <div class="home">
    <div class="router-views">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
    <nav class="nav" style="height:.86rem">
      <mt-tabbar v-model="selected">
        <mt-tab-item :id="item.id"  v-for="(item,index) in pageData" :key="index">
          <span slot="icon" :class="item.icon"></span>
          <!-- <span class="text">{{item.text}}</span> -->
        </mt-tab-item>
      </mt-tabbar>
    </nav>
  </div>
</template>

<script>
// import bus from "../common/eventBus.js";

export default {
  name: "home",
  data() {
    return {
      pageData: [
        { text: "首页", id: "homepage", icon: "fa fa-home fa-lg" },
        { text: "消息", id: "information", icon: "fa fa-comment-o fa-lg" },
        { text: "通讯录", id: "mailist", icon: "fa fa-address-book-o fa-lg" },
        { text: "我的", id: "user", icon: "fa fa-user fa-lg" }
      ],
      value: null,
      selected: "homepage"
    };
  },
  created (){
    // var this = this;
    console.log(this.selected)
    
    this.$root.bus.$on('bank',bank=>{
      // console.log('bus接收:---',bank);
      this.selected=bank;
      // console.log('改变：---', this.selected);
    })
  },
  watch: {
    selected: function(val) {
      // console.log('watch---',val)
      // 监听val值的变化切换路由
      this.$router.push({ path: "./" + val });
    }
  },
  // beforeDestroy(){
  //   bus.$off('bank');
  // }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .router-views {
    flex: 1;
  }
  .nav {
    bottom: 0;
    height: 0.55rem;
    background: #f5f5f5;
    font-size: 0.3rem;
    .mint-tabbar {
      height: 0.85rem;
      font-size: 0.32rem;
      .mint-tab-item {
        display: flex;
        flex-direction: column;
        .mint-tab-item-icon{
          margin-bottom:1rem;
          top: 1rem;
        }
        .text {
          font-size: 0.32rem;
        }
      }
    }
  }
}
</style>
