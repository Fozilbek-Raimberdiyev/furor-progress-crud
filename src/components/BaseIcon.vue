<template>
  <component :is="dynamicComponent" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const dynamicComponent = computed(() => {
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1)

  return defineAsyncComponent(() => import(`./icons/${name}.vue`))
})
</script>
