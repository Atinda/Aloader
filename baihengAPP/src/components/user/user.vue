<template>
  <div class="user">
    <!-- <router-link to="/userInfo">Go to hello</router-link> -->
    <!-- <router-view></router-view> -->
    <header>
      <span class="header-top">个人中心</span>
      <div class="header-bottom" @click="goUserInfo('userInfo')">
        <img class="bottom-left" :src="userTitle" alt="头像">
        <span class="bottom-middle">
          <span class="user-name">超级管理员</span>
          <span class="user-position">总集团公司</span>
        </span>
        <span class="bottom-right">
          <i class="fa fa-chevron-right"></i>
        </span>
      </div>
    </header>
    <div class="user-info">
      <div
        class="info-car"
        :class="{active:item.active}"
        v-for="(item,index) in carData"
        :key="index"
        @click="goCar(item)"
      >
        <i class="car-icon" :class="item.icon"></i>
        <span class="car-text">
          <span>{{item.text}}</span>
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <div class="user-signOut">
      <span class="tel">
        <a href="tel:0769-81886936">联系新杰</a>
      </span>
      <span class="signOut" @click="signOut">退出</span>
      <span class="copyright">V1.1.0 Copyright © 2018</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userTitle: require("../../assets/images/user/title.jpg"),
      carData: [
        { text: "联系方式", id:"contact", icon: "fa fa-phone" },
        { text: "我的二维码",id:"myQRcode", icon: "fa fa-barcode" },
        { text: "修改密码",id:"password",icon: "fa fa-edit", active: true },
        { text: "关于新杰",id:"newtop", icon: "fa fa-bookmark-o" },
        { text: "设置",id:"setUp", icon: "fa fa-cog", active: true }
      ]
    };
  },
  methods: {
    // 自定义的函数

    sweepCode: function() {
      console.log("扫码");
       let self = this;
            let cinemaCode = this.comp_cinema.cinemaCode;
            let url = encodeURIComponent(location.href.split('#')[0]);
            let paramData = { cinemaCode: cinemaCode, url: url };
            console.log('paramData-->', paramData);
            self.$axios.post('weixin_getConfig', paramData).then(
                res=> {
                    console.log(res)
                    // var uri = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx70528a0c50455259&redirect_uri=https://newtopiot.com&response_type=code&scope=snsapi_login#wechat_redirect';
                    wx.config({
                        //开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        debug:false,
                        // 必填，公众号的唯一标识
                        appId:res.data.appId,
                        // 必填，生成签名的时间戳
                        timestamp: res.data.timestamp,
                        // 必填，生成签名的随机串
                        nonceStr: res.data.noncestr,
                        // 必填，签名
                        signature: res.data.signature,
                        // 必填，需要使用的JS接口列表，所有JS接口列表
                        jsApiList: ['checkJsApi', 'scanQRCode']
                    })
                    wx.ready(function() {
                        self.weixinScan()
                    })
                    wx.error(function(res){
                        // 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
                        // alert('出错啦：' + res.errMsg)
                        console.log('wxConfig出错', res)
                        self.$MessageAlert('wxConfig出错:' + res.errMsg)
                    })
                },
                err=> {
                    console.log('错误。。。')
                    console.log(err)
                    self.$MessageAlert('jssdk请求出错:' + err.msg)}
            )
    },
    weixinScan(){
        letself = this
        wx.ready(function() {
            wx.checkJsApi({
                jsApiList: ['scanQRCode'],
                success: function(res) {
                    wx.scanQRCode({
                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
                        scanType: ['qrCode','barCode'], // 可以指定扫二维码还是一维码，默认二者都有
                        success: function(res) {
                            console.log('扫描结果-->', res) //当needResult 为 1 时，扫码返回的结果
                            let result = res.resultStr
                            if(result && result.indexOf(',')) {
                                let resultArr = result.split(',')
                                if(resultArr[1]) {
                                result = resultArr[1]
                            } else {
                            result = resultArr[0]
                            }}

                            self.$MessageAlert(result)
                        }
                    })
                }
            })
        })
    },
    // 个人中心
    goUserInfo: function(index) {
      this.$router.push('/'+index);
    },
    // 子页导航
    goCar: function(item) {
      console.log(item);
      this.$router.push('/'+item.id);
    },
    // 退出登录
    signOut: function() {
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 监听属性
  },
  mounted: function() {
    this.$store.commit("h_showActive","user")
  },
};
</script>

<style lang="less" scoped>
@width:1rem;
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
      margin-top: @width;
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
        line-height: @width;
        margin-right: 0.3rem;
      }
    }
  }
  .user-info {
    .info-car {
      display: flex;
      height: 0.6rem;
      background: #fbfbfb;
      border-bottom: 1px solid #0188d4;
      padding: 0.1rem 0.2rem;
      .car-icon {
        margin: 0.1rem;
        font-size: 0.4rem;
      }
      .car-text {
        display: flex;
        justify-content: space-between;
        margin-left: 0.15rem;
        padding: 0.1rem;
        flex: 1;
      }
    }
    .active {
      margin-bottom: 0.3rem;
    }
  }
  .user-signOut {
    display: flex;
    flex-direction: column;
    text-align: center;
    .tel {
      border-bottom: 0.01rem solid #0188d4;
      a {
        text-decoration: none;
        width: 100%;
      }
    }
    .tel,
    .signOut {
      height: 0.8rem;
      background: white;
      color: red;
      line-height: 0.8rem;
    }
    .copyright {
      font-size: 0.24rem;
    }
  }
}
</style>

