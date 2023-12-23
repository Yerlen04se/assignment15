<template>
  <label :for="htmlFor" class="label">
    {{ text }}
  </label>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    htmlFor: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.label {
  display: block;
  margin-bottom: 4px;
}
</style>
