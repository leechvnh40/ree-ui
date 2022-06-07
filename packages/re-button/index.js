// 引入组件
import reButton from './src';

// 提供 install 安装方法，供按需引入
reButton.install = function (Vue) {
    // 注册组件
    Vue.component(reButton.name, reButton)
}
// 暴露组件
export default reButton