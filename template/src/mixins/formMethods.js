export default {
  methods: {
    // 验证form
    async verifyForm(name) {
      const rules = await this.$refs[name].validate()
      return rules
    },
    // 重置form
    resetForm(name) {
      this.$refs[name].resetFields()
    }
  }
}
