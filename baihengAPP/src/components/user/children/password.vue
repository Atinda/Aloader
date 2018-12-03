<template>
  <div class="password">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">修改密码</x-header>
    <div class="password-content">
        <span class="content-rows" v-for="(item,index) in infoList" :key="index">
          <span>{{item.text}}</span>
          <input :value="item.input"/>
        </span>
        <span class="content-Preservation" @click="Preservation('bottom')">保存</span>
    </div>
    <toast 
    v-model="showPositionValue" 
    type="text" 
    :time="800" 
    is-show-mask 
    text="已保存" 
    :position="position"></toast>
  </div>
</template>

<script>
export default {
  name: 'password',
  data () {
    return {
      infoList:[
        {text:'原密码',input:''},
        {text:'新密码',input:''},
        {text:'确认新密码',input:''},
      ],
      position: 'default',
      showPositionValue:false
    }
  },
  methods:{             // 自定义的函数
    Preservation:function(position){
      this.position = position
      this.showPositionValue = true
    },
  },
}
</script>

<style lang="less" scoped>
.password{
    font-size: .3rem;
    height: 100%;
    background: #efeff4;
    .password-content{
      margin-top: .5rem;
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
                height: 92%;
                border: none;
                text-align: right;
                font-size: .2rem;
            }
        }
        .content-Preservation{
          text-align: center;
          line-height: .8rem;
          margin-top: .5rem;
          color: red;
          background: #ffffff;
          height: .8rem;
          border-top: .01rem solid #909090;
          border-bottom: .01rem solid #909090;
        }
    }
}
</style>

