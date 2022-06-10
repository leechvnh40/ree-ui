// 引入组件
import reRadio from './src';

// 提供 install 安装方法，供按需引入
reRadio.install = function (Vue) {
    // 注册组件
    Vue.component(reRadio.name, reRadio)
}
// 暴露组件
export default reRadio