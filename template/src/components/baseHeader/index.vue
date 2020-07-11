<template>
  <div class="header">
    <div class="header-title">
      <div class="header-title-text">{{ title }}</div>
      <div class="header-title-operating">
        <slot name="operating" />
      </div>
    </div>
    <slot name="filter" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '页面标题'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  &-title {
    width: 100%;
    padding-bottom: 10px;
    @include flex();
    &-text {
      font-size: 16px;
      line-height: 32px;
    }
    &-operating {
      flex: 1;
      margin-left: 20px;
      @include flex(flex-end);
    }
  }
  &-filter {
    margin-bottom: 20px;
  }
}
</style>
