<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="changeTab(index)"
          :class="{ 'active-tab': activeTab === index }"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
.tabs {
  width: 100%;
}

.tab-buttons {
  display: flex;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  margin-right: 8px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #207cca;
}

.active-tab {
  background-color: #207cca;
}

.tab-content {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
