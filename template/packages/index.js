
// 导入组件，组件必须声明 name
import BelLeComponent from './src'

// 为组件提供 install 安装方法，供按需引入
BelLeComponent.install = function (Vue) {
  Vue.component(BelLeComponent.name, BelLeComponent)
}

if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}
// 默认导出组件
export default BelLeComponent
