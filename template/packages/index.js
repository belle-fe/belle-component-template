
// 导入组件，组件必须声明 name
import BelleComponent from './src'

// 为组件提供 install 安装方法，供按需引入
BelleComponent.install = function (Vue) {
  Vue.component(BelleComponent.name, BelleComponent)
}

if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}
// 默认导出组件
export default BelleComponent
