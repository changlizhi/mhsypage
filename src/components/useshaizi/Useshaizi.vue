<template>
  <div class='layout'>
    <shaizi :num='1'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj11'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj12'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj13'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj14'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj15'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj16'></shaizi>
    <shaizi :num='1'
            :exstyle='styleobj17'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj21'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj22'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj23'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj24'></shaizi>
    <shaizi :num='2'
            :exstyle='styleobj25'></shaizi>
    <shaizi :num='3'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='4'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='5'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='6'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='7'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='8'
            :exstyle='styleobj'></shaizi>
    <shaizi :num='9'
            :exstyle='styleobj'></shaizi>
  </div>
</template>
<script type="text/ecmascript-6">
  import Expandheight from '@/components/expandheight/Expandheight.vue'
  import Shaizi from '@/components/shaizi/Shaizi.vue'
  export default {
    name: 'app',
    data () {
      return {
        styleobj: {
          'flex-wrap': 'wrap',
          'justify-content': 'space-between',
          'flex-direction': 'row',
          'align-items': 'center'
        },
        styleobj11: {
        },
        styleobj12: {
          'justify-content': 'center'
        },
        styleobj13: {
          'justify-content': 'flex-end'
        },
        styleobj14: {
          'align-items': 'center'
        },
        styleobj15: {
          'justify-content': 'center',
          'align-items': 'center'
        },
        styleobj16: {
          'justify-content': 'center',
          'align-items': 'flex-end'
        },
        styleobj17: {
          'justify-content': 'flex-end',
          'align-items': 'flex-end'
        },
        styleobj21: {
          'justify-content': 'space-between'
        },
        styleobj22: {
          'flex-direction': 'column',
          'justify-content': 'space-between'
        },
        styleobj23: {
          'flex-direction': 'column',
          'justify-content': 'space-between',
          'align-items': 'center'
        },
        styleobj24: {
          'flex-direction': 'column',
          'justify-content': 'space-between',
          'align-items': 'flex-end'
        },
        styleobj25: {
          'align-self': 'center'
        }
      }
    },
    components: {
      'expandheight': Expandheight,
      'shaizi': Shaizi
    }
  }
</script>
<style lang="less">
  .layout {
    display: flex;
    flex: 1;        
    flex-wrap: wrap;
    justify-content: spece-round;
  }
</style>
