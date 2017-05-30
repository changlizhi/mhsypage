<template>
  <div class='containerh'>
    <div>
      <router-link to='indexnone'>indexnone</router-link>
      <useshaizi></useshaizi>
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
  .containerh
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    overflow: auto
    -webkit-overflow-scrolling: touch
    background-color: #ffeeae
</style>
