<script setup lang="ts">
interface Button {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  isWaiting?: boolean;
}

withDefaults(defineProps<Button>(), {
  type: "primary",
  isWaiting: false,
});
</script>
<template>
  <button class="btn" :class="{ ['btn-' + type]: true }">
    <div class="spinner" role="status"></div>
    <slot></slot>
  </button>
</template>
<style>
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.625rem 1.625rem;
  font-size: 1.125rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn + .btn {
  margin-left: 0.75rem;
}

.btn-primary {
  color: var(--btn-primary-color);
  background-color: var(--btn-primary-background);
  border-color: var(--btn-primary-background);
}

.btn-secondary {
  color: var(--btn-secondary-color);
  background-color: var(--btn-secondary-background);
  border-color: var(--btn-secondary-background);
}

.btn-secondary:hover {
  background-color: var(--btn-secondary-background--hover);
  border-color: var(--btn-secondary-background--hover);
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}
</style>
