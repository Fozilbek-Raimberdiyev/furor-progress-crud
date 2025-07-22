<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseTable from './components/BaseTable/BaseTable.vue'
</script>

<template>
  <BaseTable :columns="[]"></BaseTable>
  <RouterView />
</template>

<style scoped></style>
