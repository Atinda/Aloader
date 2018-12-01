<template>
  <div class="mailist" style="height:0">
    <!-- <x-header :right-options="{showMore: false}" >通讯录</x-header> -->
    <div class="mailist-user">
      <div class="user-car" v-for="(item,index) in mailistData" :key="index">
        <span class="user-type">{{item.type}}</span>
        <div class="user-info">
          <span class="info-row" v-for="(items,index) in item.list" :key="index">
            <span style="display:inline-block;width:2rem;">{{items.name}}</span> <span>{{items.number}}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="mailist-index">
      <span v-for="(item,index) in mailistData" :key="index">{{item.type}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mailist',
  data () {
    return {
      mailistData:[
        {
          type:"A",
          list:[
            {name:"艾一",number:13888881238},
            {name:"安全",number:13888886688},
            {name:"阿杜",number:13888888988},
            {name:"阿文",number:13888887778},
            {name:"阿超",number:13888887778},
          ]
        },
        // {
        //   type:"B",
        //   list:[
        //     {name:"毕福建",number:13882581238},
        //     {name:"包贝尔",number:13885468988},
        //     {name:"伯君",number:13884422998},
        //   ]
        // },
        // {
        //   type:"C",
        //   list:[
        //     {name:"陈超",number:13880081238},
        //     {name:"成功",number:13882286688},
        //     {name:"楚迪",number:13882287778},
        //     {name:"沈伯君",number:13888445398},
        //     {name:"崔君",number:13888445398},
        //   ]
        // },
        {
        type:"F",
        list:[
            {name:"方超",number:13880081238},
            {name:"房成功",number:13882286688},
            {name:"付文",number:13880007278},
            {name:"沈伯君",number:13855445398},
            {name:"疯子",number:13803465398},
          ]
        },
        {
        type:"K",
        list:[
            {name:"孔功",number:13882286688},
            {name:"柯文",number:13880007278},
            {name:"风楚迪",number:13823287778},
            {name:"匡二",number:13803465398},
          ]
        },
        //  {
        // type:"N",
        // list:[
        //     {name:"倪方超",number:13880081238},
        //     {name:"宁尔",number:13800518988},
        //     {name:"宁柯文",number:13880007278},
        //     {name:"倪迪",number:13823287778},
        //     {name:"农君",number:13855445398},
        //     {name:"农阿斯顿",number:13803465398},
        //   ]
        // },
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
.mailist{
  .mailist-user{
    //  flex: 1;
    overflow: auto;
    .user-car{
      display: flex;
      flex-direction: column;
      .user-type{
        background: #ccc;
      }
      .user-info{
        display: flex;
        flex-direction: column;
        .info-row{
          display: flex;
          height: .7rem;
          padding-left:.3rem;
          border-bottom: .01rem solid #909090;
          span{
            padding-top: .1rem;
          }
        }
      }
    }
  }
  
  .mailist-index{
    position: absolute;;
    display: flex;
    flex-direction: column;
    top: 40%;
    right: .2rem;
  }
}
</style>

