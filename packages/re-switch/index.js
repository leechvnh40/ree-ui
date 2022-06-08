// 引入组件
import reSwitch from './src';

// 提供 install 安装方法，供按需引入
reSwitch.install = function (Vue) {
    // 注册组件
    Vue.component(reSwitch.name, reSwitch)
}
// 暴露组件
export default reSwitch