<template>
  <div class="pReporting">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">生产报工</x-header>
  </div>
</template>

<script>
export default {
  name: 'pReporting',
  data () {
    return {
    }
  },
  methods:{             // 自定义的函数

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
.pReporting{
    background: #00e6ff;
}
</style>

