<template>
    <div class="headerTab">
        <mt-header :title="headerData.text">
            <router-link v-if="headerData.bank" :to="headerData.bank" slot="left">
                <mt-button icon="back"  @click="goHomeBtn(headerData.bank)" >返回</mt-button>
            </router-link>
            <mt-button v-if="headerData.more" icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
// import bus from "./eventBus.js";
export default {
  name: "headerTab",
  props:{
      headerData:Object
  },
  methods:{
    goHomeBtn(bank){
      console.log('bus发送:---',bank);
      this.$root.bus.$emit('bank',bank)
    }
  }
};
</script>

<style lang="less" scoped>
.headerTab {
  .mint-header {
    font-size: 0.3rem;
    height: 0.7rem;
    .mint-header-button {
      .mint-button {
        .mint-button-icon {
          .mintui .mintui-back {
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
</style>


