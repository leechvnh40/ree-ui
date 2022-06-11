<template>
  <div class="re-switch" :class="{'is-checked':modelValue}" @click="handleClick">
    <span class="re-switch_core" ref="core">
      <span class="re-switch_button"></span>
    </span>
<!--    用input是为了加上name属性-->
    <input type="checkbox" class="re-switch_input" :name="name" ref="input">
  </div>
</template>
<script>
export default {
  name: 'reSwitch',
  components: {
  },
  props: {
    modelValue: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  mounted () {
    // 修改开关颜色
    if (this.activeColor || this.inactiveColor) {
      var color = !this.modelValue ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = color
      this.$refs.core.style.backgroundColor = color
    }
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.modelValue
  },
  watch: {
    'value' (e) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        var color = !e ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$emit('update:modelValue', !this.modelValue)
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.modelValue
    }
  }
}
</script>
<style lang="scss" scoped>
.re-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .re-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .re-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .re-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .re-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.re-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>