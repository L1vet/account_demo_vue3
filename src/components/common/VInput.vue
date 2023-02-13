<script setup lang="ts">
interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  modelValue: string;
  required?: boolean;
  error?: string;
  type?: string;
}

withDefaults(defineProps<InputProps>(), {
  type: "text",
  required: false,
  error: "",
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);

function focus() {}
function blur() {}
function keydown() {}
function keyup() {}
function input($event: Event) {
  if ($event?.target == null) return;
  const target = $event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>
<template>
  <div class="form-group" :class="{ required: required, error: error.length }">
    <label :for="name">{{ label }}</label>
    <input
      ref="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="input"
      @focus="focus"
      @blur="blur"
      :type="type"
      class="form-control"
      :id="name"
      :name="name"
      @keydown="keydown"
      @keyup="keyup"
      autocomplete="off"
    />
    <span class="input-error-message">{{ error }}</span>
  </div>
</template>
<style scoped>
.form-group {
  position: relative;
}

.form-group label {
  position: absolute;
  top: 0.375rem;
  left: 1.25rem;
  z-index: 2;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-grey);
}

.form-group input {
  width: 100%;
  height: 3.25rem;
  padding: 1.375rem 1.25rem 0.375rem 1.25rem;
  border-radius: 6.25rem;
  background: var(--color-background-mute);
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 1.5rem;
}

.form-group + .form-group {
  margin-top: 1.25rem;
}
</style>
