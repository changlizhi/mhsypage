<template>
  <div class='indexnone'>
    <appcontainernone></appcontainernone>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Containernone from '@/components/container/Containernone.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'appcontainernone': Containernone
    },
    methods: {
      logone () {
        console.log('test log')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .indexnone
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
