<template>
  <div v-if="show" class="alert" :class="alertType">
    <span class="close" @click="closeAlert">&times;</span>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import './alert.css';
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info", // по умолчанию тип - информационное сообщение
    },
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    alertType() {
      return `alert-${this.type}`;
    },
  },
  methods: {
    closeAlert() {
      this.show = false;
    },
  },
};
</script>