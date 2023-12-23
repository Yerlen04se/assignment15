<template>
  <div>
    <label :for="id" class="switch-label">{{ label }}</label>
    <div class="switch-container" @click="toggleSwitch">
      <input
          type="checkbox"
          :id="id"
          v-model="isChecked"
          :disabled="isDisabled"
          class="switch-input"
      />
      <div class="switch-slider"></div>
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
  methods: {
    toggleSwitch() {
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('input', this.isChecked);
      }
    },
  },
};
</script>

<style scoped>
.switch-label {
  margin-right: 8px;
}

.switch-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  height: 18px;
  width: 40px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 3px solid gray;
}

.switch-slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 2px;
  background-color: green;
  border-radius: 50%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch-input:checked + .switch-slider {
  background-color: #2196f3;
}

.switch-input:checked + .switch-slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

.switch-input:disabled + .switch-slider {
  background-color: #ccc;
  cursor: not-allowed;
}

.switch-input:disabled + .switch-slider:before {
  background-color: #999;
}
</style>
