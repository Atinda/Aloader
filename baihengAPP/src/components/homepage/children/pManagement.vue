<template>
  <div class="pManagement">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">生产管理</x-header>
  </div>
</template>

<script>
export default {
  name: 'pManagement',
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
.pManagement{
    background: #00e6ff;
}
</style>

