<template>
    <div class="userInfo">
         <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">个人信息</x-header>
        <div class="userInfo-content">
            <span class="content-rows" v-for="(item,index) in infoList" :key="index">
                <span>{{item.text}}</span>
                <img v-if="item.img" :src="item.img" alt="头像" style="width:.8rem;height:.8rem;border-radius:.08rem;padding:.03rem;"/>
                <input v-else :value="item.input"/>
                </span>
        </div>
    </div>
</template>
<script>

export default {
    name:"userInfo",
    data(){
        return{
            infoData: { text: "个人信息", bank: "userinfo", more: null },
            infoList:[
                {text:'头像',input:'照片',img:require("../../../assets/images/user/title.jpg"),},
                {text:'账号',input:'System'},
                {text:'工号',input:'System'},
                {text:'姓名',input:'超级管理员'},
                {text:'性别',input:'你猜'},
                {text:'公司',input:'新杰集团'},
                {text:'部门',input:'IT'},
                {text:'岗位',input:'猿'},
                {text:'角色',input:'同上'}
            ]
        }
    },
}
</script>

<style lang="less" scoped>
.userInfo{
    font-size: .3rem;
    height: 100%;
    background: #efeff4;
    .userInfo-content{
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
    }
}
</style>
