<template>
  <div class='header'>
    <div class='header-nav'>
      <router-link to='/indexnone/hanfuxin'>
        <div class='nav-hanfuxin'>
          <span class='text'>汉服心</span>
        </div>
      </router-link>
      <router-link to='/indexhf/dongtai'>
        <div class='nav-dongtai'>
            <span class='text'>汉服动态</span>
        </div>
      </router-link>
      <router-link to='/indexhf/liaotian'>
        <div class='nav-liaotian'>
          <span class='text'>聊天</span>
        </div>
      </router-link>
      <router-link to='/indexhf/fuxing'>
        <div class='nav-fuxing'>
          <span class='text'>汉服复兴</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        zhuti: 'light'
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  /*flex头部*/
  .header 
    overflow: hidden;
    background: #b9caaa;
    .header-nav 
      display: flex;
      flex: 1;
      justify-content: space-around;
      height: 4rem;
      line-height: 6rem;
      .nav-hanfuxin
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex:1;
        justify-content: space-around;
        width: 10em;
      .nav-dongtai
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex:1;
        justify-content: space-around;
        width: 10em;
      .nav-liaotian
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex:1;
        justify-content: space-around;
        width: 10em;
      .nav-fuxing
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex:1;
        justify-content: space-around;
        align-items: flex-end;
        width: 10em;
 </style>
