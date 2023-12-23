<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <input v-model="inputValue" :type="type" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value;
      this.$emit('input', this.inputValue);
    },
  },
};
</script>

<style scoped>
.form-input {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
