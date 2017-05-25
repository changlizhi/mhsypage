<template>
  <div class='footer'>
    <nav class='foot-nav'>
        <Tabs>
            <Tab-pane label="标签一"></Tab-pane>
            <Tab-pane label="标签2"></Tab-pane>
            <Tab-pane label="标签3"></Tab-pane>
        </Tabs>
    </nav>
  </div>
</template>
<script type=    t/ecmascript-6'>
</script>
<style lang='less'>

  /*flex底部，按钮平均分布*/
  .footer {
    overflow: hidden;
    background: #fff;
  }

  .foot-nav {
    display: flex;
    justify-content: flex-end;
    height: 2rem;
    line-height: 2rem;
  }

  .foot-nav * {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
</style>
