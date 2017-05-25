<template>
  <div class='header'>
    <div class='horizontal'>
      <Menu mode='horizontal'
            :theme='theme1'
            active-name='1'>
        <Menu-item name='1'>
          <Icon type='ios-paper'></Icon>
          内容管理
        </Menu-item>
        <Submenu name='2'>
          <template slot='title'>
            <Icon type='stats-bars'></Icon>
            统计分析
          </template>
          <Menu-group title='使用'>
            <Menu-item name='3-1'>新增和启动</Menu-item>
            <Menu-item name='3-2'>活跃分析</Menu-item>
            <Menu-item name='3-3'>时段分析</Menu-item>
          </Menu-group>
          <Menu-group title='留存'>
            <Menu-item name='3-4'>用户留存</Menu-item>
            <Menu-item name='3-5'>流失用户</Menu-item>
          </Menu-group>
        </Submenu>
        <Submenu name='3'>
          <template slot='title'>
            <Icon type='stats-bars'></Icon>
            统计分析
          </template>
          <Menu-group title='使用'>
            <Menu-item name='3-1'>新增和启动</Menu-item>
            <Menu-item name='3-2'>活跃分析</Menu-item>
            <Menu-item name='3-3'>时段分析</Menu-item>
          </Menu-group>
          <Menu-group title='留存'>
            <Menu-item name='3-4'>用户留存</Menu-item>
            <Menu-item name='3-5'>流失用户</Menu-item>
          </Menu-group>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        theme1: 'light'
      }
    }
  }
</script>
<style lang='less'>
  /*flex头部*/
  .header {
    height: 4rem;
    display: -webkit-box;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .header * {
    display: block;
  }

  .horizontal {
    width: 100%;
  }

</style>
