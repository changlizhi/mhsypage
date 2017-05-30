<template>
  <div class='hanfuxin'>
    <div class='huanying'>
        <router-link to='/indexhf'>
          <div class='href'></div>
        </router-link>
    </div>
    <div class='loginnav'>
      <div class='nav-content'></div>
      <div class='login'></div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .hanfuxin
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
    .huanying
      display: flex
      width: 293px
      height: 220px
      background: url('/static/hanfux/huanying.jpg')
      border-radius: 5%
      .href 
        width: 100%
        height: 100%
    .loginnav
      display: flex
      flex: 1
      background: #efaaaa
      justify-content: center
      align-items: center
      width: 100%
      height: 600px
      .nav-content
        display: flex
        flex: 1
        height: 100%
        background: #afeafe
        border-radius: 5%
      .login
        display: flex
        flex: 0.382
        height: 100%
        background: #efeefe
        border-radius: 7%
   
 
  
</style>
