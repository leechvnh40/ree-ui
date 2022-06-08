// 引入组件
import reDialog from './src';

// 提供 install 安装方法，供按需引入
reDialog.install = function (Vue) {
    // 注册组件
    Vue.component(reDialog.name, reDialog)
}
// 暴露组件
export default reDialog