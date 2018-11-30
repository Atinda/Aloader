<template>
  <div class="myQRcode">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的二维码</x-header>
      <div class="myQRcode-content" :style="setBG">
      </div>
      <!-- 长按识别二维码 -->
  </div>
</template>

<script>
export default {
  name: 'myQRcode',
  data () {
    return {
      setBG: {
        backgroundImage:
          "url(" + require("../../../assets/images/user/newtopQR.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
    }
  },
  methods:{             // 自定义的函数

  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
}
</script>

<style lang="less" scoped>
.myQRcode{
  min-height: 100%;
  font-size: .8rem;
  text-align: center;
  background: #ffff;
  .myQRcode-content{
    height: 6rem;
    width: 90%;
    margin: 2rem auto;
    background: #ffff;
  }
}
</style>

