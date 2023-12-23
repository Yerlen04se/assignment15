<template>
  <div>
    <label :for="id" class="textarea-label">{{ label }}</label>
    <textarea
        :id="id"
        v-model="inputValue"
        :rows="rows"
        :cols="cols"
        :placeholder="placeholder"
        :disabled="isDisabled"
        class="textarea-input"
    ></textarea>
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
      type: String,
      default: '',
    },
    rows: {
      type: Number,
      default: 4,
    },
    cols: {
      type: Number,
      default: 30,
    },
    placeholder: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
    inputValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
.textarea-label {
  margin-bottom: 4px;
  display: block;
}

.textarea-input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
}

.textarea-input:disabled {
  background-color: #f2f2f2;
  cursor: not-allowed;
}
</style>
