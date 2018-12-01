<template>
  <div class="setUp">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">设置</x-header>
      <span class="content-rows" v-for="(item,index) in data" :key="index">
          <span>{{item.text}}</span>
          <input :value="item.input"/>
        </span>
  </div>
</template>

<script>
export default {
  name: 'setUp',
  data () {
    return {
      data:[
        {id:1,text:"账号管理",url:"#"},
        {id:1,text:"下载设置",url:"#"},
        {id:1,text:"意见反馈",url:"#"},
        {id:1,text:"使用帮助",url:"#"},
      ]
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
.setUp{
  background: #00e6ff;
  font-size: .2rem;
  .content-rows{
    display: flex;
    flex: 1;
    justify-content: space-between;
    background: #ffffff;
    padding: 0 .2rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: .01rem solid #909090;
    input{
      height: 92%;
      border: none;
      text-align: right;
      font-size: .2rem;
    }
  }
}
</style>

