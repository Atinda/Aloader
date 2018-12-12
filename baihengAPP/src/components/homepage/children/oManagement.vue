<template>
  <div class="oManagement">
    <div class="header">
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
    </div>
    <div class="footer">
      <div class="customer" v-for="(item,index) in managementData" :key="index">
        <div class="customer-title">
          <span style="display:block">订单号：{{item.OrderNo}}</span>
          <span>客户名称：{{item.Customer}}</span>
          <span>日期：{{item.BeginDate}}</span>
        </div>
        <div class="customer-charts">
          <div class="chart-car">
            <div class="left-chart">
              <v-chart :data="data" 
                :height="150"
                :width="150"
                :padding="[20,0,50,0]"
              >
                <v-scale y :options="yOptions"/>
                <v-tooltip />
                <v-pie :radius="1" series-field="name"/>
                <v-legend :options="legendOptions" :width="100"/>
              </v-chart>
            </div>
            <div class="right-chart">
              <v-chart ref="demo" :data="barData"
                :height="150"
                :width="200"
                :padding="[30,0,30,0]"
                >
                <v-scale x field="year" />
                <v-scale y field="percent" :min="0" :max="0.5" :formatter="formatter" />
                <v-bar series-field="country" adjust="stack" />
                <v-tooltip show-value-in-legend />
              </v-chart>
            </div>
          </div>
          <!-- <div>charts2</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const map = {
  '完成': '80%',
  '未完成': '20%',
}
export default {
  name: 'oManagement',
  data () {
    return {
      results:[],
      value:"",
      legendOptions: {
        position: 'bottom',
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
        { name: '完成', percent: 80, a: '1' },
        { name: '未完成', percent: 20, a: '1' },
      ],
      barData: [
        { country: '未完成', year: '铜绞', value: 163, percent: 0.24511278195488723 },
        { country: '已完成', year: '铜绞', value: 502, percent: 0.7548872180451128 },
        { country: '未完成', year: '芯线', value: 203, percent: 0.24224343675417662 },
        { country: '已完成', year: '芯线', value: 635, percent: 0.7577565632458234 },
        { country: '未完成', year: '对绞', value: 276, percent: 0.2543778801843318 },
        { country: '已完成', year: '对绞', value: 809, percent: 0.7456221198156682 },
        { country: '未完成', year: '集合', value: 408, percent: 0.3011070110701107 },
        { country: '已完成', year: '集合', value: 947, percent: 0.6988929889298893 },
        { country: '未完成', year: '编织', value: 547, percent: 0.2806567470497691 },
        { country: '已完成', year: '编织', value: 1402, percent: 0.7193432529502309 },
        { country: '未完成', year: '三芯绞', value: 729, percent: 0.16708686683474674 },
        { country: '已完成', year: '三芯绞', value: 3634, percent: 0.8329131331652533 },
        { country: '未完成', year: '外被', value: 628, percent: 0.10651289009497965 },
        { country: '已完成', year: '外被', value: 5268, percent: 0.8934871099050203 },
        { country: '未完成', year: '包装', value: 828, percent: 0.10227272727272728 },
        { country: '已完成', year: '包装', value: 7268, percent: 0.8977272727272727 }
      ],
      managementData:[
        {
          BeginDate:"2018-11-28",
          Customer:"C0215",
          FinishDate:"",
          OrderNo:"D20181022009",
          EntryTasks:[
            {BeginDate:"",EntryNo:"1",FinishDate:"",
              Tasks:[
                {FAuxQty:22000,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"铜绞"},
                {FAuxQty:25600,FAuxQtyFinish:8800,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:23600,FAuxQtyFinish:5100,FStatus:0,FWorkShopName:"对绞"},
                {FAuxQty:83600,FAuxQtyFinish:6810,FStatus:0,FWorkShopName:"集合"},
                {FAuxQty:63600,FAuxQtyFinish:5800,FStatus:0,FWorkShopName:"编织"},
                {FAuxQty:23600,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"三芯绞"},
                {FAuxQty:53600,FAuxQtyFinish:7800,FStatus:0,FWorkShopName:"外被"},
                {FAuxQty:23600,FAuxQtyFinish:9800,FStatus:0,FWorkShopName:"包装"},
              ]
            },
            {BeginDate:"",EntryNo:"2",FinishDate:"",
              Tasks:[
                {FAuxQty:21000,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"铜绞"},
                {FAuxQty:45600,FAuxQtyFinish:3800,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:53600,FAuxQtyFinish:4100,FStatus:0,FWorkShopName:"对绞"},
                {FAuxQty:73600,FAuxQtyFinish:6010,FStatus:0,FWorkShopName:"集合"},
                {FAuxQty:33600,FAuxQtyFinish:5000,FStatus:0,FWorkShopName:"编织"},
                {FAuxQty:43600,FAuxQtyFinish:3500,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:53600,FAuxQtyFinish:7000,FStatus:0,FWorkShopName:"外被"},
                {FAuxQty:23600,FAuxQtyFinish:9000,FStatus:0,FWorkShopName:"包装"},
              ]
            },
          ]
        },
        {
          BeginDate:"2018-11-11",
          Customer:"C0218",
          FinishDate:"",
          OrderNo:"D201810288888",
          EntryTasks:[
            {BeginDate:"",EntryNo:"1",FinishDate:"",
              Tasks:[
                {FAuxQty:22000,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"铜绞"},
                {FAuxQty:25600,FAuxQtyFinish:8800,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:23600,FAuxQtyFinish:5100,FStatus:0,FWorkShopName:"对绞"},
                {FAuxQty:83600,FAuxQtyFinish:6810,FStatus:0,FWorkShopName:"集合"},
                {FAuxQty:63600,FAuxQtyFinish:5800,FStatus:0,FWorkShopName:"编织"},
                {FAuxQty:23600,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:53600,FAuxQtyFinish:7800,FStatus:0,FWorkShopName:"外被"},
                {FAuxQty:23600,FAuxQtyFinish:9800,FStatus:0,FWorkShopName:"包装"},
              ]
            },
            {BeginDate:"",EntryNo:"2",FinishDate:"",
              Tasks:[
                {FAuxQty:21000,FAuxQtyFinish:3000,FStatus:0,FWorkShopName:"铜绞"},
                {FAuxQty:45600,FAuxQtyFinish:3800,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:53600,FAuxQtyFinish:4100,FStatus:0,FWorkShopName:"对绞"},
                {FAuxQty:73600,FAuxQtyFinish:6010,FStatus:0,FWorkShopName:"集合"},
                {FAuxQty:33600,FAuxQtyFinish:5000,FStatus:0,FWorkShopName:"编织"},
                {FAuxQty:43600,FAuxQtyFinish:3500,FStatus:0,FWorkShopName:"芯线"},
                {FAuxQty:53600,FAuxQtyFinish:7000,FStatus:0,FWorkShopName:"外被"},
                {FAuxQty:23600,FAuxQtyFinish:9000,FStatus:0,FWorkShopName:"包装"},
              ]
            },
          ]
        }
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
@colorCa:#cacaca;
@color4f:#ffffff;
@px:.1rem;
@borderstyle:.01rem solid @colorCa;    
.oManagement{font-size: .3rem;
  .header{height: 1.8rem;}
  .footer{
    .customer{border-radius: .2rem;padding:@px;margin: @px;border: @borderstyle;background:@color4f;
      .customer-title{border-bottom: @borderstyle;padding-bottom: @px;}
      .customer-charts{
        .chart-car{display: flex;
        }
      }
    }
  }
}

</style>

