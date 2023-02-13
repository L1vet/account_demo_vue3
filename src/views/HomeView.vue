<script setup lang="ts">
import LeftSide from "@/components/account/LeftSide.vue";
import DescriptionList from "@/components/common/DescriptionList.vue";
import { useI18n } from "vue-i18n";
import { useAccountStore } from "@/stores/account/account";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import VButton from "@/components/common/VButton.vue";
import VForm from "@/components/common/VForm.vue";
import VInput from "@/components/common/VInput.vue";

const { t } = useI18n();

const { user } = storeToRefs(useAccountStore());
const { saveUserData } = useAccountStore();
const formatDate = (date: Date): string =>
  ("0" + (date.getDate() + 1)).slice(-2) +
  "." +
  ("0" + date.getMonth()).slice(-2) +
  "." +
  date.getFullYear();

type ViewState = "form" | "info";
const view = ref("info" as ViewState);
const formData = ref({
  ...user.value,
});

function onClickEdit() {
  formData.value = {
    ...user.value,
  };
  view.value = "form";
}

function onClickCancel() {
  view.value = "info";
}

async function onClickSave() {
  await saveUserData(formData.value);
  view.value = "info";
}

const leftSideList = computed(() => [
  {
    title: t("account.lastname"),
    value: user.value.lastname,
  },
  {
    title: t("account.firstname"),
    value: user.value.firstname,
  },
  {
    title: t("account.middlename"),
    value: user.value.middlename,
  },
  {
    title: t("account.sex"),
    value: t("account.sex" + user.value.sex),
  },
]);
const rightSideList = computed(() => [
  {
    title: t("account.email"),
    value: user.value.email,
  },
  {
    title: t("account.phone"),
    value: user.value.phone,
  },
  {
    title: t("account.birthday"),
    value: formatDate(user.value.birthday),
  },
]);
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-2">
        <LeftSide />
      </div>
      <div class="col-6 account_content">
        <h1>{{ $t("account.personal_info") }}</h1>
        <div v-if="view == 'info'" class="personal-info-view">
          <div class="row">
            <div class="col-6">
              <DescriptionList :items="leftSideList" />
            </div>
            <div class="col-6">
              <DescriptionList :items="rightSideList" />
            </div>
          </div>
          <VButton @click="onClickEdit" :type="'secondary'">{{
            $t("account.edit")
          }}</VButton>
        </div>
        <VForm v-else class="personal-info-form">
          <div class="row">
            <div class="col-6">
              <VInput
                :name="'lastname'"
                :label="$t('account.lastname')"
                v-model="formData.lastname"
              ></VInput>
              <VInput
                :name="'firstname'"
                :label="$t('account.firstname')"
                v-model="formData.firstname"
              ></VInput>
              <VInput
                :name="'middlename'"
                :label="$t('account.middlename')"
                v-model="formData.middlename"
              ></VInput>
            </div>
            <div class="col-6">
              <VInput
                :name="'email'"
                :label="$t('account.email')"
                v-model="formData.email"
              ></VInput>
              <VInput
                :name="'phone'"
                :label="$t('account.phone')"
                v-model="formData.phone"
              ></VInput>
            </div>
          </div>
          <div class="personal-info-form_control">
            <VButton @click="onClickCancel" :type="'secondary'">{{
              $t("account.cancel")
            }}</VButton>
            <VButton @click="onClickSave" :type="'primary'">{{
              $t("account.save")
            }}</VButton>
          </div>
        </VForm>
      </div>
    </div>
  </main>
</template>
<style scoped>
.account_content {
  padding-left: calc(var(--bs-gutter-x) * 0.5 + 1.25rem);
}

.account_content h1 {
  font-size: 2rem;
  line-height: 2.5rem;
}

.personal-info-view,
.personal-info-form {
  margin-top: 2.5rem;
}

.personal-info-form_control {
  margin-top: 1.75rem;
}
</style>
