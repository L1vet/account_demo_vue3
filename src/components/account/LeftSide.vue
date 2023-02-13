<script setup lang="ts">
import MiniProfileCard from "./MiniProfileCard.vue";
import AccountMenu from "./AccountMenu.vue";
import { useAccountStore } from "@/stores/account/account";
import { storeToRefs } from "pinia";
import MiniProfileStat from "./MiniProfileStat.vue";

const account = useAccountStore();

const { user, fullName, level } = storeToRefs(account);
</script>
<template>
  <div class="account-left-side">
    <MiniProfileCard :name="fullName" :level="level"></MiniProfileCard>
    <MiniProfileStat
      class="left-side__stat"
      :bonuses="user.bonuses"
      :discount="level.discount"
    />
    <AccountMenu class="left-side__menu"></AccountMenu>
  </div>
</template>
<style scoped>
.left-side__menu {
  margin-top: 2.5rem;
}

.left-side__stat {
  margin-top: 0.825rem;
}
</style>
