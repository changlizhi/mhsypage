<template>
  <div class='containerf'>
    <div>
      <router-link to='/indexhf'>indexhf</router-link>
      <router-view name='default'></router-view>
      <expandheight></expandheight>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Expandheight from '@/components/expandheight/Expandheight.vue'
  import Useshaizi from '@/components/useshaizi/Useshaizi.vue'
  export default{
    components: {
      'expandheight': Expandheight,
      'useshaizi': Useshaizi
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .containerf
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    overflow: auto
    -webkit-overflow-scrolling: touch
    background-color: #ffeeae
</style>
