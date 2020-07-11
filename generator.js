module.exports = (api, options, rootOptions) => {
  // 安装依赖
  api.extendPackage({
    dependencies: {
      'reset.css': '^2.0.2',
      'axios': '^0.19.2',
      'view-design': '^4.3.1',
      'vuex-persistedstate': '^3.0.1'
    },
    devDependencies: {
      'babel-plugin-import': '^1.13.0'
    }
  })
  
  // 删除默认模板
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])
  })

  // 复制模板
  api.render('./template')
};
