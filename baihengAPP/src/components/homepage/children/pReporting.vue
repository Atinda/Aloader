<template>
  <div class="pReporting">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">生产报工</x-header>
    <div class="pReporting-content">
        <flow>
            <flow-state state="1" title="选择机台" :is-done="isdone1"></flow-state>
            <flow-line :is-done="isdone1"></flow-line>
            <flow-state state="2" title="选择时间" :is-done="isdone2"></flow-state>
            <flow-line :is-done="isdone2"></flow-line>
            <flow-state state="3" title="生产米数" :is-done="isdone3"></flow-state>
            <flow-line :is-done="isdone3"></flow-line>
            <flow-state state="4" title="报工完成" :is-done="isdone4"></flow-state>
        </flow>
        <div v-transfer-dom>
            <loading :show="show"></loading>
          </div>
        <div class="tabview">
          <div class="tabview-car tabview-car-mactype" v-show="active">
            <div class="car-info" style="height:0px;">
              <!-- <div class="info-left">
                <span 
                class="left-macType" 
                v-for="(item,index) in this.macTypeList" 
                :key="index"
                @click="select(item)"
                >{{item.titil}}</span>
              </div> -->
              <div class="info-right">
                <div  class="right-car" v-for="(item,index) in this.macTypeList" :key="index" >
                  <div class="right-car-info" 
                  v-for="(item,index) in item.macCodeInfo" 
                  :key="index" 
                  @click="selectMac(item)">
                    <div class="info-mac-left"><img :src="item.image"/></div>
                    <div class="info-mac-right">
                      <span style="display:flex;justify-content:space-around:flex:1;"><span>{{item.macCode}}</span></span>
                      <span>{{item.macType==1?"空闲":"生产中"}}</span>
                    </div>
                    <span :class="item.active?'addColor':''"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="btnBox">
              <x-button class="car-Submission" type="primary" @click.native="nextStep1">下一步</x-button>
            </div>
          </div>
          <div class="tabview-car tabview-car-time" v-show="active1">
            <div class="car-info" style="height:0px;">选择时间</div>
            <div class="btnBox">
              <x-button class="car-Submission" type="primary" @click.native="prevStep2">上一步</x-button>
            <x-button class="car-Submission" type="primary" @click.native="nextStep2">下一步</x-button>
            </div>
          </div>
          <div class="tabview-car tabview-car-rice" v-if="active2">
            <div class="car-info">
              <div style="display:flex;height:.8rem">
                <!-- <group title="is-type传入function">
                  <x-input title="生产米数" :is-type="be2333" placeholder="I'm placeholder"></x-input>
                </group> -->
                <span>生产米数:</span>
                <x-input type="number" placeholder="请输入生产米数！" novalidate placeholder-align="right"></x-input>
              </div>
            </div>
              
            <div class="btnBox">
                <x-button class="car-Submission" type="primary" @click.native="prevStep3">上一步</x-button>
            <x-button class="car-Submission" type="primary" @click.native="nextStep3">下一步</x-button>
            </div>
          </div>
          <div class="tabview-car tabview-car-sure" v-if="active3">
            <div class="car-info">确定报工</div>
            <div class="btnBox">
              <x-button class="car-Submission" type="primary" @click.native="prevStep4">上一步</x-button>
            <x-button class="car-Submission" type="primary" @click.native="cancel">取消报工</x-button>
            <x-button class="car-Submission" type="primary" @click.native="sure">确定报工</x-button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import { TransferDom } from 'vux';

export default {
  name: "pReporting",
  directives: {
    TransferDom
  },
  data() {
    return {
      active: true,
      active1: false,
      active2: false,
      active3: false,
      show: false,

      isdone1:false,
      isdone2:false,
      isdone3:false,
      isdone4:false,

      macTypeList:[
        {titil:"押出",
        id:1,
        macCodeInfo:[
          {macCode:"I2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:false},
          {macCode:"I2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:false},
          {macCode:"I2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:false},
          {macCode:"I2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:true},
          {macCode:"I2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:false},
          {macCode:"I2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Extruder.png"),active:false},]
        },
        {titil:"包带",
        id:2,
        macCodeInfo:[
          {macCode:"P2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:false},
          {macCode:"P2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:true},
          {macCode:"P2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:false},
          {macCode:"P2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:false},
          {macCode:"P2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:false},
          {macCode:"P2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Wrap.png"),active:false},]
        },
        {titil:"对绞",
        id:3,
        macCodeInfo:[
          {macCode:"T2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},
          {macCode:"T2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},
          {macCode:"T2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},
          {macCode:"T2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},
          {macCode:"T2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},
          {macCode:"T2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Single.png"),active:false},]
        },
        {titil:"缠绕",
        id:4,
        macCodeInfo:[
          {macCode:"WD2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},
          {macCode:"WD2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},
          {macCode:"WD2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},
          {macCode:"WD2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},
          {macCode:"WD2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},
          {macCode:"WD2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/TwineWrap.png"),active:false},]
        },
        {titil:"集合",
        id:5,
        macCodeInfo:[
          {macCode:"R2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"R2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"R2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"R2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"R2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"R2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},]
        },
        {titil:"编织",
        id:6,
        macCodeInfo:[
          {macCode:"B2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},
          {macCode:"B2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},
          {macCode:"B2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},
          {macCode:"B2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},
          {macCode:"B2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},
          {macCode:"B2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Weave.png"),active:false},]
        },
            {titil:"外被",
        id:7,
        macCodeInfo:[
          {macCode:"JH2-01",macType:1,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"JH2-02",macType:2,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"JH2-03",macType:3,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"JH2-04",macType:2,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"JH2-05",macType:0,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},
          {macCode:"JH2-06",macType:1,image:require("../../../assets/images/homepage/pReporting/Gather.png"),active:false},]
        },
      ],
      selectMacData:[],
    };
  },
  methods: {
    selectMac:function(item){
      if(item.active){
        item.active = false
      }else{
        item.active = true;
      }
        
      let _this = this
      if(_this.selectMacData.length>0){
        _this.selectMacData.forEach(function(index,items){
          // console.log(index,items)
          if(index ==item.macCode){
            _this.selectMacData.splice(items);
            return false;
          }else{
            _this.selectMacData.push(item.macCode);
            return false;
          }
        })
      }else{
        _this.selectMacData.push(item.macCode);
      }
    },
    select:function(item){
      console.log(item)
    },
    nextStep1: function() {
      this.isdone1 = true;
      this.active = false;
      this.active1 = true;
    },
    nextStep2: function() {
      this.isdone2 = true;
      this.active1 = false;
      this.active2 = true;
    },
    nextStep3: function() {
      this.isdone3 = true;
      this.active2 = false;
      this.active3 = true;
    },
    prevStep2: function() {
      this.isdone1 = false;
      this.active1 = false;
      this.active = true;
      
    },
    prevStep3: function() {
      this.isdone2 = false;
      this.active2 = false;
      this.active1 = true;
    },
    prevStep4: function() {
      this.isdone3 = false;
      this.active3 = false;
      this.active2 = true;
    },
     cancel: function() {
      this.active3 = false;
      this.active = true;
      this.isdone1=false;
      this.isdone2=false;
      this.isdone3=false;
      this.isdone4=false;
    },
      sure: function() {
        this.isdone4 = true;
      this.$vux.loading.show({
        text: "提交中···"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.active3 = false;
        this.active = true;
        this.isdone1=false;
        this.isdone2=false;
        this.isdone3=false;
        this.isdone4=false;
      }, 1500);
    },
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 监听属性
  }
};
</script>

<style lang="less" scoped>
.pReporting {display: flex;flex-direction: column;height: 100%;font-size: .4rem;
  .pReporting-content {display: flex;flex-direction: column;flex: 1;
    .weui-wepay-flow__process {background-color: #00d0ff;}
    .weui-wepay-flow{padding: .1rem;height: .5rem;width: 88%;margin: 0 auto;}
    .tabview {flex: 1;margin-top: .4rem;
      .car-Submission {background: #00d0ff;}
      .weui-toast{width: 3rem;min-height: 4rem;margin-left: 0;left: 22%;}
      .tabview-car{display: flex;flex-direction: column;height: 100%;
        .car-info{display: flex;flex: 1;
          .info-left{display: flex;flex-direction:column;width: 10%;font-size: .3rem;
            .left-macType{border-bottom: .01rem solid #909090;background: #28def1;margin-top: .03rem;text-align: center;}
          }
          .info-right{width: 100%;display: flex;flex-direction:column;overflow: auto;
            .right-car{
              .right-car-info{display: flex;margin: 0 .1rem .1rem .1rem;border-radius: .05rem;background: #99eafd;
                .info-mac-left{width: 1rem;height: 1rem;
                  img{width: 100%;height: 100%;}
                }
                .info-mac-right{display: flex;flex-direction: column;flex: 1;min-height: 1rem;font-size:.2rem;}
                .addColor{min-width:.06rem;background:#0093ff;border-top-right-radius: .08rem;border-bottom-right-radius: .08rem;}
              }
            }
          }
        }
        .btnBox{display: flex;bottom: 0;width: 100%;text-align: center;
          .car-Submission{margin:.1rem auto; width: 30%;
          }
        }
      }
    }
  }
}
</style>

