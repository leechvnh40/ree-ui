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
    <re-switch :value="input" v-model:input="input"></re-switch>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      value: '',
      input: false
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

