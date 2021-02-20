<template>
  <!-- 封装的地方 -->
  <button
    :type="nativeType"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :class="[
      'el-button',
      `el-button--${type}`,
      size ? `el-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
      },
    ]"
    @click="$emit('click', $event)"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <!-- 只有传递 icon 的时候，才需要展示 -->
    <i v-if="icon && !loading" :class="icon"></i>
    <!-- 挖坑 -->
    <!-- 当用户没有传递内容的时候，span 不需要展示 -->
    <!-- 当用户传递内容了（填坑了）才需要展示 span -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  mounted() {
    // console.log(this.$slots)
  }
};
</script>

<style lang="less" scoped></style>
