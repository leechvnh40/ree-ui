<template>
  <div id="app">
    <re-link href="https://baidu.com">lyLink</re-link>
    <br>
<!--    button组件-->
    <re-button @click="visible= true">按钮</re-button>

<!--    dialog组件-->
<!--    vue3中sync的用法-->
    <re-dialog :visible="visible" v-model:visible="visible">
      <template v-slot:title>
        <h3>对话框</h3>
      </template>
      <template v-slot:footer>
        <re-button type="primary" @click="close">确认</re-button>
        <re-button @click="fn">取消</re-button>
      </template>
      这里是主体内容
    </re-dialog>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false
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

