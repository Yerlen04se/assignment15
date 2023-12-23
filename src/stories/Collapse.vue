<template>
  <div class="collapse">
    <div class="collapse-header" @click="toggleCollapse">
      {{ header }}
      <span :class="{ 'rotate-icon': isCollapsed }">&#9660;</span>
    </div>
    <div v-show="!isCollapsed" class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    isCollapsed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isCollapsedInternal: this.isCollapsed,
    };
  },
  watch: {
    isCollapsed(newValue) {
      this.isCollapsedInternal = newValue;
    },
    isCollapsedInternal(newValue) {
      this.$emit('update:isCollapsed', newValue);
    },
  },
  methods: {
    toggleCollapse() {
      this.isCollapsedInternal = !this.isCollapsedInternal;
    },
  },
};
</script>

<style scoped>
.collapse {
  border: 1px solid #ddd;
  margin-bottom: 8px;
}

.collapse-header {
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rotate-icon {
  transform: rotate(180deg);
}

.collapse-content {
  padding: 12px;
  border-top: 1px solid #ddd;
}
</style>
