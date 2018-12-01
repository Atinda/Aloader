<template>
  <div class="information">

          <div class="info-content">
            <div class="content-car" v-for="(item,index) in carData" :key="index" @click="getUserInfo(item)">
                <div class="car-title"><span class="tipTotal"></span><img title="头像" :src="item.headPortrait"/></div>
                <div class="car-name">
                    <div class="name-info">{{item.name}}<span>({{item.positon}})</span></div>
                    <div class="name-content">{{item.chatInfo[item.chatInfo.length-1].news}}</div>
                </div>
                <div class="car-time">
                    <span>{{item.chatInfo[item.chatInfo.length-1].time}}</span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data () {
    return {
      infoData: { text: "消息", bank: null, more: null },
      carData: [
        {name: "万东升",id: "01",positon: "总经理",unread:1,headPortrait: require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "周一开常务会议", newsId: 2, time: "2018/10/30 10:01:22" }
          ]
        },
        {name: "万光明",id: "01",positon: "后端大神",unread:3,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "给你一张无BUG符", newsId: 2, time: "2018/10/30 10:58:12" }
          ]
        },
        {name: "包伦德",id: "01",positon: "神一样的",unread:3,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "你说啥？你再说一遍", newsId: 2, time: "2018/10/30 12:19:12" }
          ]
        },
        {name: "李海敏",id: "01",positon: "全能高手",unread:10,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "1T的文案页面一天可以P完", newsId: 2, time: "2018/10/30 16:21:12" }
          ]
        },
        {name: "张人事",id: "01",positon: "搞事情",unread:2,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "搞事情？你在给我说一次？", newsId: 2, time: "2018/10/30 19:21:12" }
          ]
        },
        {name: "龙财务",id: "01",positon: "财务总监",unread:1,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "周一开财务通报会", newsId: 2, time: "2018/10/29 10:15:12" }
          ]
        },
        {name: "集团AI智能助手",id: "01",positon: "前方高能",unread:31,headPortrait:  require("../../assets/images/information/newtop2.png"),
          chatInfo: [
            {news: "周一开财务通报会",newsId: 1,time: "2018/10/30 10:11:11"},
            { news: "你的指令已发出,5分钟后可以开会", newsId: 2, time: "2018/10/30 11:22:12" }
          ]
        }
      ]
    }
  },
  methods:{             // 自定义的函数
    getUserInfo(item){
        // console.log(item);
        this.$router.push({ path: "vchat",query:{item}});    
    
    }
  },
  computed:{            // 计算属性

  },
  watch:{               // 监听属性

  },
}
</script>

<style lang="less" scoped>
.information {font-size: 0.2rem;background:#efeff4;height:100%;overflow: auto;
  .info-content {padding: 0.08rem}
  .content-car {display: flex;border-radius: .08rem;height:1.2rem;margin-bottom:.18rem;background:#ffffff;
    .car-title{width: 1rem;height: 100%;text-align:center;line-height:1.2rem;
        .tipTotal{display: block; background: red;border-radius: 50%;color: #ffffff;height: .2rem;width: .2rem;}
        // .tipTotal{display: flex;flex-direction:column;
            // .mint-badge.is-error{max-height:.2rem;min-height: 0.1rem;max-width: .01rem;}
            // }
        img{width: .8rem;}
    }
    .car-name{display: flex;flex-direction: column;justify-content: space-evenly; flex:1;height: 100%;
        .name-info{color: black;font-weight: bold}
        .name-content{bottom: 0}
    }
    .car-time{width: 2rem;height: 100%}
  }
}
</style>

