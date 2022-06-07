// 引入组件
import reLink from './src';

// 提供 install 安装方法，供按需引入
reLink.install = function (Vue) {
    // 注册组件
    Vue.component(reLink.name, reLink)
}
// 暴露组件
export default reLink