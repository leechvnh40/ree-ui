<template>
  <div id="app">
    <re-link href="https://baidu.com">lyLink</re-link>
    <br>
<!--    button组件-->
    <re-button @click="visible= true">按钮</re-button>

<!--    dialog组件-->
<!--    vue3中sync的用法-->
    <re-dialog :vis="visible" v-model:visible="visible">
      <template v-slot:title>
        <h3>对话框</h3>
      </template>
      <template v-slot:footer>
        <re-button type="primary" @click="close">确认</re-button>
        <re-button @click="fn">取消</re-button>
      </template>
      这里是主体内容
    </re-dialog>

<!--    input组件-->
    <re-input v-model="value"></re-input>
<!--    switch组件-->
    <br>
    <div v-show="input">switchTest</div>
    <re-switch :value="input" v-model="input"></re-switch>
<!--    ratio组件-->
    <br>
    <re-radio label="1" v-model="picked">男</re-radio>
    <re-radio label="0" v-model="picked">女</re-radio>
    <span>Picked:{{picked}}</span>
<!--    redio-group组件 升级为单选框组，组间互斥，子单选框不用v-model由group完成-->
    <br>
    <re-radio-group v-model="gender">
      <re-radio label="1">男</re-radio>
      <re-radio label="0">女</re-radio>
      <span>Picked:{{gender}}</span>
    </re-radio-group>
<!--    单个checkbox组件-->
    <re-checkbox label="option" v-model="status"></re-checkbox>
    <span>Status:{{status}}</span>
<!--    多个checkbox-->
    <re-checkbox-group v-model="fruits">
      <re-checkbox label="西瓜" ></re-checkbox>
      <re-checkbox label="草莓" ></re-checkbox>
      <re-checkbox label="火龙果" ></re-checkbox>
      <span>Fruits:{{fruits}}</span>
    </re-checkbox-group>
<!--    form组件-->
    <re-form model="model" label-width="100px">
      <re-form-item label="用户名">
        <re-input placeholder="请输入用户名" v-model="model.username"></re-input>
      </re-form-item>
      <re-form-item label="选择">
        <re-switch v-model="model.activate"></re-switch>
      </re-form-item>
    </re-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      value: '',
      input: false,
      picked:'1',
      gender:'1',
      status:'false',
      fruits:[],
      model: {
        username:'',
        activate: true
      }
    }
  },
  methods: {
    fn() {
      console.log('1213')
    },
    close() {
      this.visible = false
    }
  }
}
</script>

