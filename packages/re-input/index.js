// 引入组件
import reInput from './src';

// 提供 install 安装方法，供按需引入
reInput.install = function (Vue) {
    // 注册组件
    Vue.component(reInput.name, reInput)
}
// 暴露组件
export default reInput