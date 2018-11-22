<template>
  <div class="user">
      <!-- <router-link to="/userInfo">Go to hello</router-link> -->
        <!-- <router-view></router-view> -->
        <header>
            <span class="header-top">个人中心</span>
            <div class="header-bottom" @click="goUserInfo">
                <img class="bottom-left" :src="userTitle" alt="头像">
                <span class="bottom-middle">
                    <span class="user-name">超级管理员</span>
                    <span class="user-position">总集团公司</span>
                </span>
                <span class="bottom-right"><i class="fa fa-chevron-right"></i></span>
            </div>
        </header>
        <div class="user-info">
            <div class="info-car" 
            :class="{active:item.active}" 
            v-for="(item,index) in carData" 
            :key="index"
            @click="goCar(item)">
                <i class="car-icon" :class="item.icon"></i>
                <span class="car-text">
                    <span>{{item.text}}</span>
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
        </div>
        <div class="user-signOut">
            <span class="signOut" @click="signOut">退出</span>
            <span class="copyright">V1.1.0 Copyright © 2018</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
       userTitle: require("../../assets/images/user/title.jpg"),
      carData: [
          { text: "联系方式", icon: "fa fa-phone" },
          { text: "我的二维码", icon: "fa fa-barcode" },
          { text: "修改密码", icon: "fa fa-edit",active:true},
          { text: "关于新杰", icon: "fa fa-bookmark-o" },
          { text: "设置", icon: "fa fa-cog",active:true},
          ]
    }
  },
  methods:{             // 自定义的函数
      goUserInfo:function(){
          this.$router.push({path:"userInfo"});
          console.log("个人中心")
      },
      goCar:function(item){
          console.log(item)
      },
      signOut:function(){
          this.$router.push({path:"/"});
      }
  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
    // 1·实例初始化之后，数据观测和事件配置之前被调用
  beforeCreate:function(){        
    console.log('beforeCreate 实例初始化之后钩子执行');
  },
    // 2·实例已经创建完成之后被调用,挂载阶段还没开始，$el 属性目前不可见
  created:function(){             
    console.log('cteated 实例已经创建完成之后钩子执行...');
  },
    // 3·在挂载开始之前被调用：相关的 render 函数首次被调用
  beforeMount:function(){         
    console.log('beforeMount 钩子执行在挂载开始之前');
  },
    // 4·el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子
  mounted:function(){             
    console.log('mounted 挂载到实例上去之后钩子执行...');
  },
    // 5·数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
  beforeUpdate:function(){        
    console.log('beforeUpdate 数据更新时调用钩子执行...');
  },
    // 6·由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
    //   组件DOM已经更新，现在可以执行依赖于DOM的操作，此处避免更改状态，可能会导致无限更新循环
  updated:function(){             
    console.log('updated 钩子执行...');
  },
    // 7·实例销毁之前调用，在这一步，实例仍然完全可用
  beforeDestroy:function(){       
    console.log('beforeDestroy 实例销毁之前钩子执行...');
  },
    // 8·Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed:function(){           
    console.log('destroyed 实例销毁后调用钩子执行...');
  }
}
</script>

<style lang="less" scoped>
.user {
  height: 100%;
  font-size: 0.3rem;
  background: #efeff4;
  header {
    display: flex;
    flex-direction: column;
    height: 2.5rem;
    background: #0188d4;
    color: white;
    .header-top {
      text-align: center;
    }
    .header-bottom {
      display: flex;
      margin-top: 1rem;
      height: 3rem;
      margin-bottom: 0.1rem;
      .bottom-left {
        margin-left: 0.2rem;
        height: 100%;
        width: 1rem;
        border-radius: 50%;
      }
      .bottom-middle {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
        padding-top: 0.08rem;
        .user-position {
          font-size: 0.2rem;
          text-align: center;
          background: #e8eae470;
          border-radius: 5px;
        }
      }
      .bottom-right {
        text-align: right;
        flex: 1;
        line-height: 1rem;
        margin-right: 0.3rem;
      }
    }
  }
  .user-info{
      .info-car{display: flex; height: .6rem;background:#fbfbfb;border-bottom:1px solid #0188d4;padding:.1rem .2rem;
        .car-icon{margin: .1rem;font-size: .4rem}
        .car-text{display: flex;justify-content: space-between; margin-left: .15rem;padding: .1rem;flex:1}
      }
      .active{margin-bottom:.3rem}
  }
  .user-signOut{display: flex;flex-direction: column;text-align: center;
    .signOut{height: .6rem;background: white;color: red;line-height: .6rem}
    .copyright{font-size: .24rem}
  }
}
</style>

