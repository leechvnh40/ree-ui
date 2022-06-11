// 引入组件
import reFormItem from './src';

// 提供 install 安装方法，供按需引入
reFormItem.install = function (Vue) {
    // 注册组件
    Vue.component(reFormItem.name, reFormItem)
}
// 暴露组件
export default reFormItem