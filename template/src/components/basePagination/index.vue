<template>
  <div class="pagination">
    <i-page :page-size="pageInfos.size" :total="pageInfos.total" v-on="eventMethods" show-sizer transfer :page-size-opts="[20, 40, 60, 80, 100]" />
  </div>
</template>

<script>
export default {
  props: {
    pageInfos: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    eventMethods() {
      const { getPage, getSize } = this.$listeners
      const vm = this
      return {
        getPage,
        'on-change'(page) {
          vm.$emit('getPage', page)
        },
        getSize,
        'on-page-size-change'(size) {
          vm.$emit('getSize', size)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding-top: 20px;
  width: 100%;
  @include flex();
}
</style>
