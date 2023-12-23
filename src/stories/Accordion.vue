<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleItem(index)">
        {{ item.title }}
        <span :class="{ 'rotate-icon': activeIndex === index }">&#9660;</span>
      </div>
      <div v-show="activeIndex === index" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
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
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion {
  width: 100%;
}

.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 8px;
}

.accordion-header {
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rotate-icon {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 12px;
  border-top: 1px solid #ddd;
}
</style>
