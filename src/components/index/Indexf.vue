<template>
  <div class='indexf'>
    <appcontainerf></appcontainerf>
    <appfooter></appfooter>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Footer from '@/components/footer/Footer.vue'
  import Containerf from '@/components/container/Containerf.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'appfooter': Footer,
      'appcontainerf': Containerf
    },
    methods: {
      logone () {
        console.log('test log')
      }
    }
  }
</script>

<style lang='less'>
  .indexf {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 100%;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #ccceee;
  }

</style>
