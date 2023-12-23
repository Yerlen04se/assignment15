<template>
  <div class="page-footer">
    <slot></slot>
    <p class="footer-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '© 2023 Your Company. All rights reserved.',
    },
  },
};
</script>

<style scoped>
.page-footer {
  margin-top: 16px;
  padding: 16px;
  background-color: #f8f8f8;
  text-align: center;
}

.footer-text {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
}
</style>
