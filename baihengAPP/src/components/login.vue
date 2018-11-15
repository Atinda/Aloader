<template>
  <div class="login">
    <div class="login-car">
      <div class="gooey"></div>
      <group title="登陆信息">
        <x-input title="账号" name="username" placeholder="请输入账号" v-model="username" focus></x-input>
        <x-input title="密码" name="password" placeholder="请输入密码" v-model="password" type="password"></x-input>
      </group>
      <x-button type="primary" @click.native="loginBtn(username,password)" :show-loading="show">{{text}}</x-button>
    </div>
    <divider class="copyrightOwneR">Copyright © 2018 东莞市新杰物联网科技有限公司</divider>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,
      show:false,
      text:'登陆'
    }
  },
   methods: {
    loginBtn:function(username,password) {
      this.show = true;
      this.text = '登陆中···';
      let _this = this;
      setTimeout(function(){
        _this.$router.push({path:"/home"})
        if(!!username && !!password){
          // this.$router.push({path:"/home"})
        }
      },2000)
      
    }
  }
}
</script>

<style scoped>
.login{
  height: 100%;
  /* background: #00e6ff; */

  
}
.login-car {
  height: 32%;
  width: 70%;
  position: absolute;
  margin-left: -35%;
  top: 40%;
  left: 50%;
}
.weui-btn_primary{
  margin-top: .2rem;
  background-color: #3b6ff5
}
.copyrightOwneR{
    color: #cccccc;
    font-size: .2rem;
    text-align: center;
    position: absolute;
    bottom:.03rem;
  }
.gooey {
  margin: 10px auto;
  background-image: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  width: 60%;
  height: 50%;
  animation: morph 3s linear infinite;
  transform-style: preserve-3d;
  outline: 1px solid transparent;
  will-change: border-radius;
}
.gooey:before,
.gooey:after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  box-shadow: 5px 5px 89px rgba(0, 102, 255, 0.21);
  will-change: border-radius, transform, opacity;
  animation-delay: 200ms;
  background-image: linear-gradient(
    120deg,
    rgba(0, 67, 255, 0.55) 0%,
    rgba(0, 103, 255, 0.89) 100%
  );
}

.gooey:before {
  animation: morph 3s linear infinite;
  opacity: 0.21;
  animation-duration: 1.5s;
}

.gooey:after {
  animation: morph 3s linear infinite;
  animation-delay: 400ms;
  opacity: -5;
  content: "新  杰  物  联  网";
  line-height: 1.9rem;
  text-indent: .2rem;
  color: white;
  font-size: .32rem;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    opacity: 0.89;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}

@keyframes fadeIn {
  100% {
    transform: scale(1.03);
    opacity: 0;
  }
}
</style>

