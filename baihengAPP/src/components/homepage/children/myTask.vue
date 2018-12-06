<template>
  <div class="myTask">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的任务</x-header>
     <div class="btnWrap">
       <nav class="listBtn" 
       v-for="(item,index) in taskbtn" 
       :key="index"
       @click="goto(item)"><i :class="item.icon" :style="{color:item.color}"></i> {{item.title}}</nav>
     </div>
     <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      placeholder="请输入关键字"
      position="absolute"
      auto-scroll-to-top
      top="1.46rem"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      ref="search">
      </search>
      <div class="task-list" style="height:0px;">
        <div class="task-car" v-for="(item,index) in taskData" :key="index">
          <article class="task-car-title">
            <i class="fa fa-dot-circle-o" :style="{color:item.color}"></i>
            <h4>{{item.title}}</h4>
            <span>{{item.time}}</span>
          </article>
          <div class="task-car-number"><span>编号：</span><span>{{item.number}}</span></div>
          <div class="task-car-content"><span>内容：</span><span>{{item.content}}</span></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'myTask',
  data () {
    return {
      taskbtn:[
        {id:1,title:"未处理",color:"#ffc314",icon:"fa fa-dot-circle-o"},
        {id:2,title:"处理中",color:"#0a65ec",icon:"fa fa-dot-circle-o"},
        {id:3,title:"已完结",color:"#25ff00",icon:"fa fa-dot-circle-o"},
        {id:4,title:"待批复",color:"#f90824",icon:"fa fa-dot-circle-o"},
      ],
      results:[],
      value:"",
      taskData:[
        {id:1,title:"未处理事务标题",number:2018120055,content:"关于未处理事务事宜内容···",time:"2018-12-08",color:"#ffc314"},
        {id:2,title:"处理中事务标题",number:2018120445,content:"关于处理中事务事宜内容···",time:"2018-12-07",color:"#0a65ec"},
        {id:3,title:"已完结事务标题",number:2018120125,content:"关于已完结事务事宜内容···",time:"2018-12-07",color:"#25ff00"},
        {id:4,title:"待批复事务标题",number:2018122455,content:"关于待批复事务事宜内容···",time:"2018-12-06",color:"#f90824"},
        {id:2,title:"处理中事务标题",number:2018120044,content:"关于处理中事务事宜内容···",time:"2018-12-06",color:"#0a65ec"},
        // {id:2,title:"处理中事务标题",number:2018120028,content:"关于处理中事务事宜内容···",time:"2018-12-05",color:"#0a65ec"},
        // {id:4,title:"待批复事务标题",number:2018120038,content:"关于待批复事务事宜内容···",time:"2018-12-03",color:"#f90824"},
        // {id:1,title:"未处理事务标题",number:2018120086,content:"关于未处理事务事宜内容···",time:"2018-12-01",color:"#ffc314"},
        // {id:1,title:"未处理事务标题",number:2018120086,content:"关于未处理事务事宜内容···",time:"2018-12-01",color:"#ffc314"},
        // {id:1,title:"未处理事务标题",number:2018120086,content:"关于未处理事务事宜内容···",time:"2018-12-01",color:"#ffc314"},
        // {id:1,title:"未处理事务标题",number:2018120086,content:"关于未处理事务事宜内容···",time:"2018-12-01",color:"#ffc314"},
      ]
    }
  },
  methods:{             // 自定义的函数
    goto(item){
      console.log(item)
    },
    // 点击行目标
    resultClick(item){
      console.log("1",item)
    },
    getResult(val){
      console.log("2",val);
    },
    onFocus(){
      console.log("click onFocus")
    },
    onCancel(){
      console.log("click onCancel")
    },
    // onSubmit(){
    //   this.$refs.search.setBlur()
    //   this.$vux.toast.show({
    //     type: 'text',
    //     position: 'top',
    //     text: 'on submit'
    //   })
    // }
  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
};
</script>

<style lang="less" scoped>
.myTask{height: 100%;font-size: .3rem;
  .btnWrap{display: flex;justify-content: space-around;background: #ffffff;height: .6rem;line-height: .6rem;}
  .weui-search-bar{padding:.2rem .3rem !important}
  // 列表内容
  .task-list{display: flex;flex: 1;flex-direction:column;
  // 事件卡片
    .task-car{margin: .1rem .2rem;background:#ffffff;border-radius:.1rem;
      .task-car-title{display: flex;border-bottom:.01rem solid #cacaca;
        i{width: .6rem;text-align: end;line-height: .6rem}
        h4{flex:1;padding:0 0 0 .36rem;margin:0;text-align: start;line-height: .6rem}
        span{width:2rem;line-height: .6rem}
      }
      div{padding:.1rem;}
    }
  }
}
</style>

