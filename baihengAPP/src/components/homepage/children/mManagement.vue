<template>
  <div class="mManagement">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">机台管理</x-header>
  </div>
</template>

<script>
export default {
  name: 'mManagement',
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
.mManagement{
    background: #00e6ff;
}
</style>

