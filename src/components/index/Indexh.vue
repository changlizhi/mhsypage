<template>
  <div class='indexh'>
    <appheader></appheader>
    <appcontainerh></appcontainerh>

  </div>
</template>

<script type='text/ecmascript-6'>
  import Header from '@/components/header/Header.vue'
  import Containerh from '@/components/container/Containerh.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'appheader': Header,
      'appcontainerh': Containerh
    },
    methods: {
      logone () {
        console.log('test log')
      }
    }
  }
</script>

<style lang='less'>
  .indexh {
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
