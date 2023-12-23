<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <label :for="`${id}-${index}`" class="radiobox-label">{{ option.label }}</label>
      <input
          type="radio"
          :id="`${id}-${index}`"
          :name="name"
          :value="option.value"
          :checked="option.value === selectedValue"
          @change="handleChange(option.value)"
          :disabled="isDisabled"
          class="radiobox-input"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectedValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
.radiobox-label {
  margin-right: 8px;
}

.radiobox-input {
  margin-top: 4px;
}
</style>
