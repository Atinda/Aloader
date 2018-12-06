<template>
  <div class="oManagement">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">订单管理</x-header>
     <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      placeholder="请输入订单号"
      position="absolute"
      auto-scroll-to-top
      top=".95rem"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      ref="search">
      </search>
      <div class="management">
        <v-chart :data="data" >
          <v-scale y :options="yOptions" />
          <v-tooltip disabled />
          <v-pie :radius="0.85" series-field="name" />
          <v-legend :options="legendOptions" />
        </v-chart>
      </div>
  </div>
</template>

<script>
const map = {
  '芳华': '40%',
  '妖猫传': '20%',
}
export default {
  name: 'oManagement',
  data () {
    return {
      results:[],
      value:"",
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      data: [
        { name: '芳华', percent: 0.4, a: '1' },
        { name: '妖猫传', percent: 0.2, a: '1' },
      ],
      managementData:[
        {id:0,tiem:"2018-05-23",customer:"北京宏策",salesman:"李白",
          llist:[
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
          ]
        },
        {id:0,tiem:"2018-05-23",customer:"上海彼方",salesman:"李白",
          llist:[
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000}
          ]
        },
        {id:0,tiem:"2018-05-23",customer:"北京宏策",salesman:"李白",
          llist:[
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
          ]
        },
        {id:0,tiem:"2018-05-23",customer:"北京宏策",salesman:"李白",
          llist:[
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
            {number:"SO1852562556",name:"三芯线",totalQuantity:100000,existingQuantity:50000},
          ]
        },
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
    },
    onFocus(){
      console.log("click onFocus")
    },
    onCancel(){
      console.log("click onCancel")
    },
  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
}
</script>

<style lang="less" scoped>
.oManagement{font-size: .3rem;background: #00e6ff;
  .management{height:1rem}
}
</style>

