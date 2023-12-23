<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <h2>Sidebar Navigation</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  // Нет необходимости в свойствах или методах в этом простом компоненте
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  overflow-y: auto;
}

.sidebar-content {
  padding: 16px;
}

h2 {
  font-size: 18px;
  margin-bottom: 12px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 8px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
