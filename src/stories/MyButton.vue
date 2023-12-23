<template>
  <button :class="buttonClass" @click="handleClick">
    <slot>{{label}}</slot>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true, // 'button', 'submit', 'reset'
    },
    type: {
      type: String,
      default: 'button', // 'button', 'submit', 'reset'
    },
    variant: {
      type: String,
      default: 'default', // 'default', 'primary', 'secondary', etc.
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.variant}`;
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте свои стили кнопки здесь */
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
}

.btn-secondary {
  background-color: #ccc;
  color: #333;
}

/* Дополнительные стили для разных вариантов кнопки */
</style>
