// 引入组件
import reRadioGroup from './src';

// 提供 install 安装方法，供按需引入
reRadioGroup.install = function (Vue) {
    // 注册组件
    Vue.component(reRadioGroup.name, reRadioGroup)
}
// 暴露组件
export default reRadioGroup