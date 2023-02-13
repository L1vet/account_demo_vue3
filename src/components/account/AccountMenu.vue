<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const links = [
  {
    title: t("account.personal_info"),
    to: "/",
  },
  {
    title: t("account.cashback"),
    to: "/cashback",
  },
  {
    title: t("account.clubcard"),
    to: "/clubcard",
  },
  {
    title: t("account.orders"),
    to: "/orders",
  },
  {
    title: t("account.logout"),
    to: "/logout",
  },
];
</script>
<template>
  <nav class="account_menu">
    <RouterLink
      v-for="(link, i) in links"
      :key="i"
      class="account_menu__link"
      :to="link.to"
    >
      {{ link.title }}
    </RouterLink>
  </nav>
</template>
<style scoped>
.account_menu {
  display: flex;
  flex-direction: column;
}
.account_menu__link {
  margin-top: 0.25rem;
  padding: 0.375rem 1.5rem 0.375rem 0.75rem;
  color: var(--color-text);
  border-radius: 0.375rem;
}

.account_menu__link:hover,
.account_menu__link.router-link-active {
  background-color: var(--color-background-mute);
}
</style>
