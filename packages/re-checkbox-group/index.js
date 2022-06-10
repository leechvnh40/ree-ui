// 引入组件
import reCheckboxGroup from './src';

// 提供 install 安装方法，供按需引入
reCheckboxGroup.install = function (Vue) {
    // 注册组件
    Vue.component(reCheckboxGroup.name, reCheckboxGroup)
}
// 暴露组件
export default reCheckboxGroup