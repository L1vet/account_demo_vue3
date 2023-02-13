<script setup lang="ts">
interface Item {
  title: string;
  value: string;
}
defineProps<{ items: Array<Item> }>();
</script>
<template>
  <dl v-for="(item, i) in items" :key="i">
    <dt>{{ item.title }}</dt>
    <dd>{{ item.value }}</dd>
  </dl>
</template>
<style scoped>
dl {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.25rem;
}

dt {
  width: 50%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
}

dd {
  font-weight: 500;
}
</style>
