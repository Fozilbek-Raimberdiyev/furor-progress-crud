<script setup lang="ts">
import { Button, type ButtonProps } from 'ant-design-vue'
// import BaseIcon from '../BaseIcon.vue'
interface PropsInterface extends ButtonProps {
  bgColor?: string
  borderColor?: string
}
const { size = 'middle', bgColor } = defineProps<PropsInterface>()
</script>

<template>
  <Button
    @click="$emit('click')"
    v-bind="$attrs"
    :class="[bgColor ? 'has-own-bg' : '', borderColor ? 'has-own-border' : '']"
    :block
    :danger
    :disabled
    :ghost
    :href
    :htmlType
    :icon
    :loading
    :shape
    :size
    :target
    :type
  >
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </Button>
</template>

<style>
.ant-btn {
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.ant-btn.has-own-bg {
  background: v-bind('bgColor') !important;
}
.ant-btn.has-own-border {
  background: v-bind('borderColor') !important;
}
</style>
