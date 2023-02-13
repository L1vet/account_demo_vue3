<script setup lang="ts">
import type { Level } from "@/stores/account/AccountSettings";
interface Props {
  level: Level;
  type?: "circle" | "square";
}

withDefaults(defineProps<Props>(), { type: "circle" });
</script>
<template>
  <div
    class="level-icon vm"
    :class="'level-icon--' + type"
    :style="{ 'background-color': level.iconBackgroundColor }"
  >
    <span
      :class="level.icon"
      class="level-icon-pic"
      :style="{ color: level.iconColor }"
    ></span>
  </div>
</template>
<style scoped>
.level-icon {
  width: 4.625rem;
  height: 4.625rem;
}

.level-icon--circle {
  border-radius: 4.625rem;
}

.level-icon-pic {
  font-size: 3.125rem;
}
</style>
