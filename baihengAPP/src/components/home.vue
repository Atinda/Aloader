<template>
  <div class="home">
    <div class="router-views">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <keep-alive>
    <tabbar>
      <tabbar-item :selected="this.selecteds=='homepage'?true:false" @on-item-click="goto('homepage')">
        <i slot="icon" class="fa fa-home fa-lg"></i>
        <!-- <span slot="label">主页</span> -->
      </tabbar-item>
      <tabbar-item :selected="this.selecteds=='information'?true:false" show-dot @on-item-click="goto('information')">
        <i slot="icon" class="fa fa-comment-o fa-lg"></i>
        <!-- <span slot="label">消息</span> -->
      </tabbar-item>
      <tabbar-item :selected="this.selecteds=='mailist'?true:false" @on-item-click="goto('mailist')">
        <i slot="icon" class="fa fa-address-book-o fa-lg"></i>
        <!-- <span slot="label">通讯</span> -->
      </tabbar-item>
      <tabbar-item :selected="this.selecteds=='user'?true:false"  @on-item-click="goto('user')">
        <i slot="icon" class="fa fa-user fa-lg"></i>
        <!-- <span slot="label">我的</span> -->
      </tabbar-item>
    </tabbar>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      selecteds:''
    };
  },
  methods: {
    // 自定义的函数
    goto: function(i) {
      this.$router.push({ path: i });
    }
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 监听属性
  },
    // 4·el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子
  mounted:function(){             
    console.log(this.$store.state.home.tabbarBtnShow);
  },
    // 5·数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
  beforeUpdate:function(){        
    console.log('beforeUpdate 数据更新时调用钩子执行...');
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: .4rem;
  .router-views {
    flex: 1;
  }
  
  .weui-tabbar{
    padding-top: .3rem;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
}
</style>

