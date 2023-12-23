<template>
  <div class="breadcrumb">
    <span v-for="(item, index) in items" :key="index">
      <router-link :to="item.to">{{ item.label }}</router-link>
      <span v-if="index < items.length - 1" class="breadcrumb-separator"> &gt; </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  font-size: 14px;
  color: #555;
}

.breadcrumb-separator {
  margin: 0 4px;
}
</style>
