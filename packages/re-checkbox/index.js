// 引入组件
import reCheckbox from './src';

// 提供 install 安装方法，供按需引入
reCheckbox.install = function (Vue) {
    // 注册组件
    Vue.component(reCheckbox.name, reCheckbox)
}
// 暴露组件
export default reCheckbox