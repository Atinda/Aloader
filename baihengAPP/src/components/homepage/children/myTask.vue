<template>
  <div class="myTask">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的任务</x-header>
     <div class="btnWrap">
       <span class="listBtn" v-for="(item,index) in taskbtn" :key="index"><i :class="item.icon" :style="{color:item.color}"></i> {{item.title}}</span>
     </div>
     <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="1.46rem"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      ref="search">
      </search>
      <div class="task-list">
        <!-- <group>
          <cell title="keyword">{{ value }}</cell>
        </group> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'myTask',
  data () {
    return {
      taskbtn:[
        {id:1,title:"未处理",color:"#7d7d80",icon:"fa fa-dot-circle-o"},
        {id:2,title:"处理中",color:"#779ace",icon:"fa fa-dot-circle-o"},
        {id:3,title:"已完结",color:"#d3932e",icon:"fa fa-dot-circle-o"},
        {id:4,title:"待批复",color:"#a24550",icon:"fa fa-dot-circle-o"},
      ],
      results:[],
      value:"输入关键字",
      taskData:[
        {id:1,title:"未处理事务标题",number:2018120055,content:"关于未处理事务事宜内容···",time:"2018-12-08"},
        {id:2,title:"处理中事务标题",number:2018120445,content:"关于处理中事务事宜内容···",time:"2018-12-07"},
        {id:3,title:"已完结事务标题",number:2018120125,content:"关于已完结事务事宜内容···",time:"2018-12-07"},
        {id:4,title:"待批复事务标题",number:2018122455,content:"关于待批复事务事宜内容···",time:"2018-12-06"},
        {id:2,title:"处理中事务标题",number:2018120044,content:"关于处理中事务事宜内容···",time:"2018-12-06"},
        {id:2,title:"处理中事务标题",number:2018120028,content:"关于处理中事务事宜内容···",time:"2018-12-05"},
        {id:4,title:"待批复事务标题",number:2018120038,content:"关于待批复事务事宜内容···",time:"2018-12-03"},
        {id:1,title:"未处理事务标题",number:2018120086,content:"关于未处理事务事宜内容···",time:"2018-12-01"},
      ]
    }
  },
  methods:{             // 自定义的函数
  // 点击行目标
    resultClick(item){
      console.log("1",item)
    },
    getResult(val){
      console.log("2",val);
      this.results = val ? getResult(this.taskData) : []
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
function getResult (val) {
  console.log(val)
  let rs = []
  for (let i = 0; i < val.length; i++) {
    rs.push({
      title: `${val[i].title}`,
      other:`${val[i]}`
      // other: i,
      // id: `${val.id}`,
      // title: val.title,
      // number: val.number,
      // content: val.content,
      // time: val.time
    })
    }
    return rs
  }
</script>

<style lang="less" scoped>
.myTask{
  font-size: .3rem;
  background: #ffffff;
  .btnWrap{
    display: flex;
    justify-content: space-around;
    height: .6rem;
    line-height: .6rem;
  }
}
</style>

