<template>
  <div>
    <label :for="id" class="checkbox-label">{{ label }}</label>
    <input
        type="checkbox"
        :id="id"
        v-model="isChecked"
        :disabled="isDisabled"
        class="checkbox-input"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.isChecked = newValue;
    },
    isChecked(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
.checkbox-label {
  margin-right: 8px;
}

.checkbox-input {
  margin-top: 4px;
}
</style>
