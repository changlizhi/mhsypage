<template>
    <div class='app'>
      <firecanvas class="fire"></firecanvas>
      <router-view name='default'></router-view>
    </div>
  
</template>

<script type='text/ecmascript-6'>
  import firecanvas from '@/components/firecanvas/Firecanvas'
  export default {
    name: 'app',
    components: {
      'firecanvas': firecanvas
    },
    created () {
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
    background-color: #ccceee;
  }
  @media screen and (max-width: 440px) {
      .fire {
          display: none;
      }
      .app {
          background: #000;
      }
  }

</style>
