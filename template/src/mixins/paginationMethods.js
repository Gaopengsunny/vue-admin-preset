export default {
  data() {
    return {
      pageInfos: {
        total: 0,
        page: 1,
        size: 20
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      console.log({ ...this.pageInfos })
    },
    // 分页切换
    getPage(page) {
      this.pageInfos.page = page
      this.getData()
    },
    // 分页数量切换
    getSize(size) {
      this.pageInfos.size = size
      if (this.pageInfos.page === 1) this.getData()
    }
  }
}
