<template>
  <div class='footer'>
    <div>
       <ul class='foot-nav'>
          <router-link tag='li' class='jianyi' to='/indexf/jianyi'>
            <a>我要建议</a>
          </router-link>
          <router-link tag='li' class='goumai' to='/indexf/goumai'>
            <a>购买支持</a>
          </router-link>
          <router-link tag='li' class='wode' to='/indexf/wode'>
            <a>我的</a>
          </router-link>
        </ul>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
    export default {
    
    }
    
</script>
<style lang='less'>

  /*flex底部，按钮平均分布*/
  .footer {
    overflow: hidden;
    background: #b9cfff;
  }

  .foot-nav {
    display: flex;
    flex: 1;
    justify-content: space-around;
    height: 2rem;
    line-height: 2rem;
  }

  .jianyi {
    display: flex;
    margin-left: 5em;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex:1;
  }
  .goumai {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .wode {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }

</style>
