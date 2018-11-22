<template>
  <div class="vchat">
      <x-header @on-click-more="showMenus = true">{{this.$route.query.item.name}}</x-header>
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

