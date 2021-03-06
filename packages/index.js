// 引入组件
import reLink from './re-link'
import reButton from './re-button'
import reDialog from './re-dialog'
import reInput from './re-input'
import reSwitch from './re-switch'
import reRadio from './re-ratio'
import reRadioGroup from './re-radio-group'
import reCheckbox from './re-checkbox'
import reCheckboxGroup from './re-checkbox-group'
import reForm from './re-from'
import reFormItem from './re-form-item'
// 存放组件的数组
const components = [
    reLink,
    reButton,
    reDialog,
    reInput,
    reSwitch,
    reRadio,
    reRadioGroup,
    reCheckbox,
    reCheckboxGroup,
    reForm,
    reFormItem
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}

 // 判断是否是直接引入cdn文件
 if (typeof window !== 'undefined' && window.Vue) {
     install(window.Vue)
 }

export default install

export {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    reLink,
    reButton,
    reDialog,
    reInput,
    reSwitch,
    reRadio,
    reRadioGroup,
    reCheckbox,
    reCheckboxGroup,
    reForm,
    reFormItem
}