<template>
  <div class="contact">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">联系方式</x-header>
    <div class="contact-content">
      <span class="content-rows" v-for="(item,index) in infoList" :key="index">
        <span>{{item.text}}</span>
        <input :value="item.input"/>
      </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
       infoList:[
                {text:'手机',input:'138-8888-8888'},
                {text:'电话',input:'0769-81886936'},
                {text:'邮箱',input:'newtop@newtop.com'},
                {text:'微信',input:'newtopIOT'},
                {text:'QQ',input:'88888888'}
            ]
    }
  },
  methods:{             // 自定义的函数

  },
  computed:{            // 计算属性

  },
}
</script>

<style lang="less" scoped>
.contact{
    font-size: .3rem;
    height: 100%;
    background: #efeff4;
    .contact-content{
        display: flex;
        flex-direction: column;
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
                height: 95%;
                border: none;
                text-align: right;
                font-size: .2rem;
            }
        }
    }
}
</style>

