<template>
  <Pagination
    :defaultCurrent="modelValue"
    :responsive="true"
    @change="onChange"
    :total="total"
    :defaultPageSize="pageSize"
    :current="modelValue"
  />
</template>

<script setup lang="ts">
import { Pagination } from 'ant-design-vue'

defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 50,
  },
})
const emit = defineEmits(['update:modelValue', 'changed'])

function onChange(current: number) {
  emit('update:modelValue', current)
  emit('changed', current)
}
</script>

<style>
.ant-pagination-item,
.ant-pagination-next,
.ant-pagination-prev {
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px !important;
  border: 1px solid #eeeef0 !important;
  background: #fff !important;
  font-family: 'Manrope-Regular', sans-serif !important;
  color: #10101a !important;
  transition: all 0.3s ease;
}

.ant-pagination-item:hover,
.ant-pagination-next:hover,
.ant-pagination-prev:hover {
  border-color: #b8d7d9 !important;
  color: #41959a !important;
  background: #e7f2f2 !important;
}

.ant-pagination-item-active {
  border-color: #117a81 !important;
}

.ant-pagination-item-ellipsis {
  font-size: 16px;
}

:where(.css-dev-only-do-not-override-ufvd2p).ant-pagination.ant-pagination-mini
  .ant-pagination-item {
  margin: 0 4px;
}

:where(.ant-pagination .ant-pagination-options) {
  display: none !important;
  margin-inline-start: 16px;
  vertical-align: middle;
}

.anticon {
  vertical-align: text-top !important;
}
</style>
