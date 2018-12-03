<template>
  <div class="pPlan">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">生产计划</x-header>
  </div>
</template>

<script>
export default {
  name: 'pPlan',
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
.pPlan{
    background: #00e6ff;
}
</style>

