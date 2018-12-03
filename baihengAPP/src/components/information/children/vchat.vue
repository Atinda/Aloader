<template>
  <div class="vchat">
    <!-- <x-header @on-click-back="showBack = true" :left-options="{showBack:false}">{{this.$route.query.item.name}}</x-header> -->
    <x-header @on-click-back="gotoBack()">{{this.$route.query.item.name}}</x-header>
    <div class="chat-content">
      <div class="content-car" v-for="(item,index) in this.$route.query.item.chatInfo" :key="index">
        <span class="car-time">{{item.time}}</span>
        <div class="car-record">
          <img class="record-title" :src="headPortrait" alt="头像">
          <span>{{item.news}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vchat',
  data () {
    return {
        headPortrait: require("../../../assets/images/logo/newtop2.png"),
        infoData: { text: this.$route.query.item.name, bank: "information", more: null },
        userInput:{text:"",time:""},
        showInput:[]
    }
  },
  methods:{             // 自定义的函数
    // gotoBack:function(){
    //   console.log("huiqu")
    // },
    submi:function(){
      this.userInput.time = this.formatDate();
      this.showInput.push(this.userInput)
      // this.userInput.text = "";
      // this.userInput.time = "";
      // console.log(this.userInput.text,this.showInput,this.formatDate())
    },
    formatDate:function(){
      let date = new Date();
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
}
</script>

<style lang="less" scoped>
.vchat{display: flex;flex-direction: column; background: #efeff4;height:100%;font-size:.2rem;
  .chat-content{flex: 1;
    .content-car{display: flex;flex-direction: column;
      .car-time{text-align: center;margin-top: .2rem;};
      .car-record{margin-top: .2rem;
        .record-title{width: .6rem;height: .4rem;}
      }
    }
    .user{display: flex;flex-direction:column;font-size:.2rem;
      .user-time{text-align: center;}
      img{width: .6rem;height: .4rem;text-align: right}
    }
  }
  .chat-submission{display: flex;margin:0 .1rem .1rem;
    input{flex:1;margin-right: .1rem;border-radius: .1rem;border: none;}
    .mint-button--large{width: .9rem;font-size: .3rem}
  }
}
</style>

