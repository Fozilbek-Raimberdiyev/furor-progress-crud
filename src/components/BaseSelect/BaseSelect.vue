<script setup lang="ts">
import { Select } from 'ant-design-vue'
import { type SelectProps, type SelectValue } from 'ant-design-vue/es/select'
const model = defineModel<SelectValue>()
const emit = defineEmits([
  'select',
  'deselect',
  'blur',
  'change',
  'dropdownVisibleChange',
  'focus',
  'inputKeyDown',
  'mouseenter',
  'mouseleave',
  'popupScroll',
  'search',
])

const {
  bordered = true,
  showSearch = true,
  allowClear = true,
  showAction = ['click'],
  size = 'middle',
} = defineProps<SelectProps>()
</script>
<template>
  <Select
    @select="($event: SelectValue) => emit('select', $event)"
    @deselect="($event: any) => emit('deselect', $event)"
    @blur="($event: any) => emit('blur', $event)"
    @change="($event: any) => emit('change', $event)"
    @dropdown-visible-change="($event: any) => emit('dropdownVisibleChange', $event)"
    @focus="($event: any) => emit('focus', $event)"
    @input-key-down="($event: any) => emit('inputKeyDown', $event)"
    @mouseenter="($event: any) => emit('mouseenter', $event)"
    @mouseleave="($event: any) => emit('mouseleave', $event)"
    @popup-scroll="($event: any) => emit('popupScroll', $event)"
    @search="($event: any) => emit('search', $event)"
    :allowClear
    :autoClearSearchValue
    :autofocus
    :bordered
    :clearIcon
    :defaultActiveFirstOption
    :defaultOpen
    :disabled
    :fieldNames
    :filterOption
    :filterSort
    :loading
    :showArrow
    :showSearch
    :showAction
    :status
    :virtual
    :size
    :options
    style="width: 100%"
    v-model:value="model"
    :placeholder
    :mode
  >
  </Select>
</template>

<style scoped></style>
