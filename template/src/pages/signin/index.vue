<template>
  <div class="signin">
    <div class="signin-content">
      <div class="signin-content-title">欢迎回来</div>
      <i-form autocomplete="off" :model="formData" :rules="rules" ref="form">
        <i-form-item label="账号" prop="account">
          <i-input placeholder="请输入账号" v-model="formData.account" />
        </i-form-item>
        <i-form-item label="密码" prop="password">
          <i-input type="password" placeholder="请输入密码" password v-model="formData.password" />
        </i-form-item>
        <i-form-item>
          <i-checkbox v-model="remember">&nbsp;&nbsp;记住我</i-checkbox>
        </i-form-item>
        <i-form-item>
          <i-button long type="primary" @click="signin">登录</i-button>
        </i-form-item>
      </i-form>
    </div>
  </div>
</template>

<script>
import formMethods from '@/mixins/formMethods'
import { mapState, mapMutations } from 'vuex'

export default {
  mixins: [formMethods],
  data() {
    return {
      formData: {
        account: '',
        password: ''
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      remember: false
    }
  },
  computed: {
    ...mapState(['signinState'])
  },
  created() {
    if (this.signinState.account && this.signinState.password) this.defalutData()
  },
  methods: {
    ...mapMutations(['setSigninData']),
    // 默认赋值
    defalutData() {
      const { account, password, remember } = this.signinState
      this.formData = { account, password }
      this.remember = remember
    },
    // 登录
    async signin() {
      const rule = await this.verifyForm('form')
      if (!rule) return
      if (this.remember) this.setState()
      else this.removeState()
      console.log({ ...this.formData })
      // this.$router.replace({ name: 'home' })
    },
    // 记住账号密码
    setState() {
      const params = {
        remember: this.remember,
        ...this.formData
      }
      this.setSigninData(params)
    },
    // 删除已记住数据
    removeState() {
      const params = {
        remember: '',
        account: '',
        password: ''
      }
      this.setSigninData(params)
    }
  }
}
</script>

<style lang="scss" scoped>
.signin {
  width: 100%;
  height: 100%;
  @include flex();
  background-color: #fff;
  &-content {
    background-color: #fff;
    padding: 20px 20px 0;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 400px;
    &-title {
      font-size: 16px;
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
</style>
