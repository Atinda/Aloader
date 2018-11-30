<template>
  <div class="homepage">
    <header class="home-header" :style="setBG">
      <div class="header-top">
        <div class="scavenging" @click="scavenging()">
          <input type="file" accept="image/*" capture="camera"/>
          <span><i class="fa fa-camera-retro"></i></span>
        </div>
        <div class="search"><input type="text" placeholder="搜索应用"/></div>
        <div class="information" @click="goPageInfo"><span class="fa fa-envelope-o"></span></div>
      </div>
      <div class="header-banner"></div>
    </header>
    <div class="task">
        <div class="task-car" 
        :url="item.url" 
        v-for="(item,index) in carData" 
        :key="index"
        @click="goPage(item)">
            <div class="icon" :style="{backgroundColor:item.color}"><i :class="item.icon"></i></div>
            <span>{{item.text}}</span>
        </div>
        <div class="task-More">
            <div class="icon"><i class="fa fa-bars"></i></div>
            <span>更多</span>
        </div>
    </div>
    <div class="data-statistics">
        <div class="listCar" v-for="(item,index) in list" :key="index">
            <span class="text"><i :class="item.icon" :style="{color:item.color}"></i> {{item.text}}</span>
            <div class="center">
                内容
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      value: null,
      setBG: {
        backgroundImage:
          "url(" + require("../../assets/images/homepage/homepage1.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
      carData: [
        {
          text: "我的任务",
          id: 1,
          icon: "fa fa-bookmark-o fa-lg",
          url: "myTask",
          color: "#60e3f3"
        },
         {
          text: "生产报工",
          id: 1,
          icon: "fa fa-pencil-square-o fa-lg",
          url: "pReporting",
          color: "#ff6283"
        },
         {
          text: "生产投料",
          id: 1,
          icon: "fa fa-sitemap fa-lg",
          url: "pFeeding",
          color: "#6294ff"
        },
         {
          text: "生产进度",
          id: 1,
          icon: "fa fa-line-chart fa-lg",
          url: "pSchedule",
          color: "#42c38c"
        },
        {
          text: "生产计划",
          id: 1,
          icon: "fa fa-table fa-lg",
          url: "pPlan",
          color: "#4389ce"
        },
        {
          text: "订单管理",
          id: 1,
          icon: "fa fa-server fa-lg",
          url: "oManagement",
          color: "#ffd761"
        },
        {
          text: "机台管理",
          id: 1,
          icon: "fa fa-braille fa-lg",
          url: "mManagement",
          color: "#fe955c"
        },
        {
          text: "生产管理",
          id: 1,
          icon: "fa fa-cogs fa-lg",
          url: "pManagement",
          color: "#7bd2ff"
        },
        {
          text: "品质管理",
          id: 1,
          icon: "fa fa-check-square-o fa-lg",
          url: "qManagement",
          color: "#62bbff"
        }
      ],
      list: [
        {
          text: "统计数据",
          id: "1",
          icon: "fa fa-calculator",
          url: "#1",
          color: "#60e3f3"
        },
        {
          text: "新闻列表",
          id: "2",
          icon: "fa fa-calendar-o",
          url: "#2",
          color: "#fe955c"
        },
        {
          text: "通知公告",
          id: "3",
          icon: "fa fa-desktop",
          url: "#3",
          color: "#7bd2ff"
        },
        // {
        //   text: "客户订单占比",
        //   id: "4",
        //   icon: "fa fa-pie-chart",
        //   url: "#4",
        //   color: "#62bbff"
        // }
      ]
    };
  },
  methods: {
    scavenging:function(){
      
    },
    goPageInfo: function() {
    //   this.$router.push({ path: "./information" });
    },
    switchbg: function() {
      //   setInterval(() => {
      //     console.log("215");
      //   }, 500);
    }, 
    goPage:function(item){
        console.log(item,item.url,this.$route);
        this.$router.push('/'+item.url);
    }
  },
  mounted: function() {
    this.switchbg();
  }
};
</script>

<style lang="less" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #efeff4;
  font-size: .26rem;
  .home-header {
    // 头部
    display: flex;
    flex-direction: column;
    height: 25%;
    border-bottom: .01rem solid #cccccc;
    color: #ffffff;
    .header-top {
      display: flex;
      margin: .05rem .05rem 0;
      background: rgba(232, 227, 228, 0.84);
      border-radius: .05rem;
      .scavenging,
      .information {
        display: block;
        width: .95rem;
        text-align: center;
        font-size: .3rem;
      }
      .scavenging{
        input[type='file']{
          height: .40rem;
          width: .70rem;
          left: .1rem;
          position: absolute;
          opacity: 0;   //透明度为0
          filter: alpha(opacity=0);
          cursor: pointer;
        }
        span{
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .search {
        width: 100%;
        input {
          border-radius: 5px;
          height: .38rem;
          width: 99%;
          background: rgba(61, 170, 224, 0.08);
          border: none;
          font-size: .22rem;
        }
      }
    }
  }
  .task {
    // 任务展示
    display: flex;
    flex-wrap: wrap;
    height: 30%;
    overflow: auto;
    margin-bottom: 8px;
    background: #ffffff;
    .task-car,
    .task-More {
      min-width: 25%;
      height: 50%;
      padding-top: .2rem;
      .icon {
        border-radius: 50%;
        text-align: center;
        background: #8f99a0;
        height: 1rem;
        width: 1rem;
        line-height: 1rem;
        margin-left: auto;
        margin-right: auto;
        font-size: .4rem;
        color: #ffffff;
      }
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
      }
    }
  }
  .data-statistics {
    // 底部内容
    flex: 1;
    background: #efeff4;
    overflow: auto;
    .listCar {
      display: flex;
      flex-direction: column;
      height: 100px;
      background: #ffffff;
      margin: 0 5px 8px;
      padding: 5px;
      border-radius: 5px;
      .text {
        border-bottom: 1px solid #efeff4;
      }
    }
  }
}
</style>
