<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { n } = useI18n();
defineProps<{ bonuses: number; discount: number }>();
</script>
<template>
  <div class="mini-profile-stat">
    <div class="mini-profile-stat__column">
      <span class="mini-profile-stat__header">{{ $t("account.bonuses") }}</span>
      <span class="mini-profile-stat__value">{{ n(bonuses, "currency") }}</span>
    </div>
    <div class="mini-profile-stat__column">
      <span class="mini-profile-stat__header">{{
        $t("account.discount")
      }}</span>
      <span class="mini-profile-stat__value">{{ discount }}%</span>
    </div>
  </div>
</template>
<style>
.mini-profile-stat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
  background: var(--color-background-mute);
  border-radius: 0.5rem;
}

.mini-profile-stat__header,
.mini-profile-stat__value {
  display: block;
}

.mini-profile-stat__header {
  font-size: 1rem;
  line-height: 1.5rem;
}

.mini-profile-stat__value {
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
</style>
