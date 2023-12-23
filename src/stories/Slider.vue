<template>
  <div class="slider-container">
    <label :for="id" class="slider-label">{{ label }}</label>
    <input
        type="range"
        :id="id"
        v-model="sliderValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="isDisabled"
        class="slider-input"
    />
    <span class="slider-value">{{ sliderValue }}</span>
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
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sliderValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.sliderValue = newValue;
    },
    sliderValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
.slider-container {
  margin-bottom: 16px;
}

.slider-label {
  display: block;
  margin-bottom: 8px;
}

.slider-input {
  width: 100%;
}

.slider-value {
  display: inline-block;
  margin-left: 8px;
}
</style>
