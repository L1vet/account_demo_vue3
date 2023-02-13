<script setup lang="ts">
import type { Level } from "@/stores/account/AccountSettings";
import LevelIcon from "@/components/account/LevelIcon.vue";

defineProps<{ name: string; level: Level }>();
</script>
<template>
  <div class="mini-profile-card">
    <div class="mini-profile-card__icon-wrapper">
      <LevelIcon :level="level"></LevelIcon>
    </div>
    <div class="mini-profile-card__text vm">
      <span class="mini-profile-card__name">{{ name }}</span>
    </div>
  </div>
</template>
<style scoped>
.mini-profile-card {
  display: flex;
  flex-direction: row;
}

.mini-profile-card__text {
  padding-left: 0.75rem;
}

.mini-profile-card__name {
  /* export to font class */
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  /* export to font class */
}
</style>
