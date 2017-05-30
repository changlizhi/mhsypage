<template>
  <div class='footer'>
    <div class='footer-nav'>
      <router-link to='/indexf/jianyi'>
        <div class='nav-jianyi'>
          <span>建议一下</span>
        </div>
      </router-link>
      <router-link to='/indexf/goumai'>
        <div class='nav-goumai'>
          <span>我想买汉服</span>
        </div>
      </router-link>
      <router-link to='/indexf/wode'>
        <div class='nav-wode'>
          <span>设置</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
    export default {
    
    }
    
</script>
<style lang='stylus' rel='stylesheet/stylus'>

  /*flex底部，按钮平均分布*/
  .footer 
    overflow: hidden
    background: #b9cfff
    .footer-nav 
      display: flex
      flex: 1
      justify-content: space-around
      height: 2rem
      line-height: 2rem
      .nav-jianyi 
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
      .nav-goumai 
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex: 1
        justify-content: space-around
        width: 10em
      .nav-wode 
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex: 1
        justify-content: space-around
        width: 10em
</style>
