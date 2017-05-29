<template>
  <div class='shaizi'
       :style='exstyle'>
    <div class='yuan'
         v-for='item in num'>
      <router-link to='/indexhf'>
        <div class='href'></div>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      num: Number,
      exstyle: Object
    }
  }
</script>
<style lang="less">
  .shaizi {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
    width: 120px;
    height: 120px;
    background: #e3e8ee;
    border-radius: 5%;
  }

  .yuan {
    width: 30px;
    height: 30px;
    margin-top: 2px;
    margin-left: 2px;
    background: #fff;
    border-radius: 50%;
  }

  .href {
    width: 100%;
    height: 100%;
  }
</style>
