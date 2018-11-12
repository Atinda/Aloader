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
  name: "user",
  data() {
    return {
      userTitle: require("../../assets/imges/user/title.jpg"),
      carData: [
          { text: "联系方式", icon: "fa fa-phone" },
          { text: "我的二维码", icon: "fa fa-barcode" },
          { text: "修改密码", icon: "fa fa-edit",active:true},
          { text: "关于新杰", icon: "fa fa-bookmark-o" },
          { text: "设置", icon: "fa fa-cog",active:true},
          ]
    };
  },
  methods:{
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
  }
};
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