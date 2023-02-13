import apiUser from "@/api/apiUser";
import type User from "@/entities/account/User";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useSettingsStore } from "../settings";

export const useAccountStore = defineStore("account", () => {
  const user = ref({
    firstname: "",
    lastname: "",
    middlename: "",
    sex: "male",
    birthday: new Date(),
    email: "",
    phone: "",
    bonuses: 0,
    level: 1,
  } as User);

  const fullName = computed(
    (): string =>
      `${user.value.lastname} ${user.value.firstname} ${user.value.middlename}`
  );

  const { account: settings } = storeToRefs(useSettingsStore());
  const level = computed(
    () => settings.value.levels["level" + user.value.level]
  );

  async function fetchCurrentUser() {
    user.value = await apiUser.fetchCurrentUser();
  }

  async function saveUserData(userData: User) {
    user.value = userData;
  }

  setInterval(
    () =>
      (user.value.level = user.value.level + 1 > 6 ? 1 : ++user.value.level),
    500
  );

  return { user, fullName, level, fetchCurrentUser, saveUserData };
});
