<template>
  <div class='indexf'>
    <appheader></appheader>
    <appcontainerhf></appcontainerhf>
    <appfooter></appfooter>

  </div>
</template>

<script type='text/ecmascript-6'>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import Containerhf from '@/components/container/Containerhf.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'appheader': Header,
      'appfooter': Footer,
      'appcontainerhf': Containerhf
    },
    methods: {
      logone () {
        console.log('test log')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .indexf
    display: -webkit-box
    -webkit-box-orient: vertical
    height: 100%
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    overflow: auto
    -webkit-overflow-scrolling: touch
    background-color: #ccceee
</style>
