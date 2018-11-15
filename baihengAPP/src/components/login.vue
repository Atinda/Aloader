<template>
  <div class="login">
    <x-button type="primary">login</x-button>
    <span slot="icon" class="fa fa-home fa-lg"></span>
    <i class="fa fa-comment-o fa-lg"></i>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  
}
</script>

<style lang="less" scoped>
.login{
  height: 100%;
  background: #00e6ff;
}
</style>

