<template>
  <div class='app'>
    <appheader></appheader>
    <appcontainer></appcontainer>
    <appfooter></appfooter>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import Container from '@/components/container/Container.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'appheader': Header,
      'appfooter': Footer,
      'appcontainer': Container
    }
  }
</script>

<style lang='less'>
  .app {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 100%;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #ccc;
  }

</style>
