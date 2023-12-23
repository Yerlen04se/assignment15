<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="toggle-button">
      {{ selectedOption ? selectedOption.label : 'Select an option' }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      options: [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
        {label: 'Option 3', value: 'option3'},
        // Добавьте нужное количество опций
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('option-selected', option); // Вы можете использовать это событие для уведомления родительского компонента о выборе опции
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.toggle-button {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
