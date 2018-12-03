<template>
  <div class="myTask">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的任务</x-header>
  </div>
</template>

<script>
export default {
  name: 'myTask',
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
}
</script>

<style lang="less" scoped>
.myTask{
    background: #00e6ff;
}
</style>

