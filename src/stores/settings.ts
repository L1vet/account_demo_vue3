import { defineStore } from "pinia";
import { ref } from "vue";
import type AccountSettings from "./account/AccountSettings";
import apiSettings from "@/api/apiSettings";

export const useSettingsStore = defineStore("settings", () => {
  const account = ref({} as AccountSettings);

  async function fetchSettings() {
    const settings = await apiSettings.fetchSettings();
    account.value = settings.account;
  }

  return { account, fetchSettings };
});
