import { Button, Table, Form, FormItem, Message, Layout, Header, Content, Sider, Footer, Input, Page, Checkbox, Poptip, Menu, Submenu, MenuItem } from 'view-design'

export default {
  install(Vue) {
    Vue.prototype.$message = Message
    Vue.component('i-button', Button)
    Vue.component('i-table', Table)
    Vue.component('i-form', Form)
    Vue.component('i-form-item', FormItem)
    Vue.component('i-layout', Layout)
    Vue.component('i-header', Header)
    Vue.component('i-content', Content)
    Vue.component('i-sider', Sider)
    Vue.component('i-footer', Footer)
    Vue.component('i-input', Input)
    Vue.component('i-page', Page)
    Vue.component('i-checkbox', Checkbox)
    Vue.component('i-poptip', Poptip)
    Vue.component('i-menu', Menu)
    Vue.component('i-submenu', Submenu)
    Vue.component('i-menu-item', MenuItem)
  }
}
