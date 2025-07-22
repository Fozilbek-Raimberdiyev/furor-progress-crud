<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path
      d="M6.94129 16.2274L2.5 18.0001L4.27267 13.5588M6.94129 16.2274L16.1704 6.99831M6.94129 16.2274L6.58624 13.9133L4.27267 13.5588M4.27267 13.5588L13.5018 4.32968M16.1704 6.99831L13.5018 4.32968M16.1704 6.99831L16.999 6.16969C17.7359 5.43277 17.7359 4.23798 16.999 3.50106V3.50106C16.2621 2.76414 15.0673 2.76414 14.3304 3.50106L13.5018 4.32968M9.16667 18.0001H17.5"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#ADB5BD',
  },
})
</script>
