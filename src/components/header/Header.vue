<template>
  <div class='header'>
    <div>
      <ul class='nav'>
        <router-link tag='li' class='hanfuxin' to='/indexhnone/hanfuxin'>
            <a>汉服心</a>
        </router-link>
        <router-link tag='li' class='dongtai' to='/indexhf/dongtai'>
            <a>汉服动态</a>
        </router-link>
        <router-link tag='li' class='liaotian' to='/indexhf/liaotian'>
            <a>聊天</a>
        </router-link>
        <router-link tag='li' class='fuxing' to='/indexhf/fuxing'>
            <a>汉服复兴</a>
        </router-link>
      </ul>
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
<style lang='less'>
  /*flex头部*/
  .header {
    display: flex;
    height: 4rem;
    display: -webkit-box;
    align-items: flex-end;
    background: #b9ceee;
  }


  .nav {
    display: flex;
    justify-content: center;
    flex: 100%;
    padding-left: 10em;
    padding-bottom: .3em;
  }
  .hanfuxin{
    flex: 1;
    justify-content: center;
    width: 5em;
  }
  .dongtai{
    flex: 1;
    justify-content: center;
    width: 10em;
  }
  .liaotian{
    flex: 1;
    justify-content: center;
    width: 10em;
  }
  .fuxing{
    flex: 1;
    justify-content: center;
    width: 10em;
  }


</style>
