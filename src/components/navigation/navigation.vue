<!-- tempelate -->
<template>
  <div>
    <!-- logo -->
    <div class="TopNavigationBar">
      <div class="logo">bree..</div>
      <!-- routes -->
    <div class="routes">
      <div><a href="" class="route">home</a></div>
      <div><a href="" class="route">tickets</a></div>
      <div><a href="" class="route">about</a></div>
    </div>
  </div>
  </div>
</template>
<!-- script -->
<script></script>
<!-- style -->
<style>
/* Styling to handle top navigation */
.TopNavigationBar {
  display: flex;
  position: relative;
  justify-content: space-between;
}

/* Styling the logo */
.logo {
  margin-top: 48px;
  font-size: 36px;
  color: #f63505;
  font-family: courier new, monospace;
  text-decoration: none;
}

/* Styling the navigation buttons */
.route {
  color: #f63505;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}
.route:hover {
  background-color: #33d3fb;
  font-size: 150%;
  border-radius: 2px;
  animation-name: bounce;
  animation-duration: 3s;
}

/* Styling the navigation buttons */
.routes {
  display: flex;
  font-size: 22px;
}
</style>
