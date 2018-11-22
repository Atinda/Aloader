<template>
    <div class="userInfo">
         <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">个人信息</x-header>
        <ul>
            <li v-for="(item,index) in infoList" :key="index"><span>{{item.text}}</span><input :value="item.input"/></li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"userInfo",
    data(){
        return{
            infoData: { text: "个人信息", bank: "userinfo", more: null },
            infoList:[
                {text:'头像',input:'照片'},
                {text:'账号',input:'System'},
                {text:'工号',input:'System'},
                {text:'姓名',input:'超级管理员'},
                {text:'性别',input:'你猜'},
                {text:'公司',input:'集团'},
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
    ul{
        li{
            display: flex;
            justify-content: space-between;
            background: #ffffff;
            padding: 0 .2rem;
            height: .8rem;
            width: 95%;
            line-height: .8rem;
            border-bottom: 1px solid #909090;
            input{
                border: none;
                text-align: right;
                // border-bottom: 1px solid #909090;
            }
        }
    }
}
</style>
