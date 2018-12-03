<template>
  <div class="qManagement">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">品质管理</x-header>
  </div>
</template>

<script>
export default {
  name: 'qManagement',
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
.qManagement{
    background: #00e6ff;
}
</style>

