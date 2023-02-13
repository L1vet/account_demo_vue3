<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "VForm",
  setup(props, { slots }) {
    const state = ref({});
    const s = slots.default();

    return { state, s };
  },
});
</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>
