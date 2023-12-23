<template>
  <div class="card-horizontal">
    <div class="card-image">
      <img :src="imageUrl" :alt="imageAlt" />
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>
      <div class="card-footer">
        <span class="card-date">{{ date }}</span>
        <button @click="handleButtonClick" class="card-button">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'Card Image',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-click');
    },
  },
};
</script>

<style scoped>
.card-horizontal {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card-horizontal:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 150px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-content {
  flex-grow: 1;
  padding: 16px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  margin-bottom: 12px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-date {
  font-size: 12px;
  color: #888;
}

.card-button {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card-button:hover {
  background-color: #207cca;
}
</style>
