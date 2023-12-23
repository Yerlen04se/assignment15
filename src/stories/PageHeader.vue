<template>
  <div class="page-header">
    <h1 class="page-title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page-header {
  margin-bottom: 16px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 8px;
}
</style>
