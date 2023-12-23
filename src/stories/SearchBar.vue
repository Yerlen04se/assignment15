<template>
  <div class="search-bar">
    <input
        v-model="searchTerm"
        @input="handleInput"
        type="text"
        :placeholder="placeholder"
        class="search-input"
    />
    <button @click="handleSearch" class="search-button">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: 'Enter your search term...',
    },
  },
  methods: {
    handleInput() {
      // Вы можете добавить дополнительную логику обработки ввода, если это необходимо
    },
    handleSearch() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  margin-bottom: 16px;
}

.search-input {
  flex-grow: 1;
  padding: 8px;
}

.search-button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #207cca;
}
</style>
