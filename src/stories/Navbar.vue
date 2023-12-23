<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link :to="homeLink.to" class="navbar-logo">{{ homeLink.label }}</router-link>
    </div>
    <div class="navbar-menu">
      <router-link v-for="(item, index) in navLinks" :key="index" :to="item.to" class="navbar-item">
        {{ item.label }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    homeLink: {
      type: Object,
      required: true,
    },
    navLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: darkblue;
  color: white;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  margin-right: 16px;
  font-size: 14px;
  color: white;
  text-decoration: none;
}
</style>
