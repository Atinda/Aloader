<template>
  <div class="pSchedule">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">生产进度</x-header>
      <div class="pReporting-content" style="display:none">
            <flow>
                <flow-state state="1" title="选择机台" :is-done="isdone1"></flow-state>
                <flow-line :is-done="isdone1"></flow-line>
                <flow-state state="2" title="选择时间" :is-done="isdone2"></flow-state>
                <flow-line :is-done="isdone2"></flow-line>
                <flow-state state="3" title="生产米数" :is-done="isdone3"></flow-state>
                <flow-line :is-done="isdone3"></flow-line>
                <flow-state state="4" title="报工完成" :is-done="isdone4"></flow-state>
            </flow>
            <div class="tabview">
              <div v-transfer-dom>
                <loading :show="show"></loading>
              </div>
              <div class="tabview-car tabview-car-mactype" v-if="active">选择机台
                <div class="car-info"></div>
                <x-button class="car-Submission" type="primary" @click.native="nextStep1">下一步</x-button>
              </div>
              <div class="tabview-car tabview-car-time" v-if="active1">选择时间
                <div class="car-info"></div>
                <x-button class="car-Submission" type="primary" @click.native="prevStep2">上一步</x-button>
                <x-button class="car-Submission" type="primary" @click.native="nextStep2">下一步</x-button>
              </div>
              <div class="tabview-car tabview-car-rice" v-if="active2">生产米数
                <div class="car-info"></div>
                <x-button class="car-Submission" type="primary" @click.native="prevStep3">上一步</x-button>
                <x-button class="car-Submission" type="primary" @click.native="nextStep3">下一步</x-button>
              </div>
              <div class="tabview-car tabview-car-sure" v-if="active3">确定报工
                <div class="car-info"></div>
                <x-button class="car-Submission" type="primary" @click.native="prevStep4">上一步</x-button>
                <x-button class="car-Submission" type="primary" @click.native="cancel">取消报工</x-button>
                <x-button class="car-Submission" type="primary" @click.native="sure">确定报工</x-button>
              </div>
            </div>
        </div>
  </div>
</template>

<script>

import { TransferDom } from 'vux';

export default {
  name: "pSchedule",
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
    };
  },
  methods: {
    // 自定义的函数 
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
.pSchedule {
  height: 100%;
  font-size: .4rem;
  .pReporting-content {
    height: 100%;
    .weui-wepay-flow__process {
      background-color: #00d0ff;
    }
    .tabview {
      height: 100%;
      .car-Submission {
        background: #00d0ff;
      }
      .weui-toast{
        width: 3rem;
        min-height: 4rem;
        margin-left: 0;
        left: 22%;
      }
      .tabview-car{
        .car-info{
          height: 8rem;
        }
      }
    }
  }
}
</style>

