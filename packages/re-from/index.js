// 引入组件
import reForm from './src';

// 提供 install 安装方法，供按需引入
reForm.install = function (Vue) {
    // 注册组件
    Vue.component(reForm.name, reForm)
}
// 暴露组件
export default reForm