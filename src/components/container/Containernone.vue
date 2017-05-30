<template>
  <div class='containernone'>
    <div>
      <router-link to='/indexf'>indexf</router-link>
      <router-view name='default'></router-view>
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
<style  lang='stylus' rel='stylesheet/stylus'>
  .containernone
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    overflow: auto
    -webkit-overflow-scrolling: touch
    background-color: #ffeeae

</style>
