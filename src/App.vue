<template>
  <div id="app" class="container">
    <ul class="nav">
      <li class="nav-item"><router-link to="/" tag='a' class='nav-link'>Home</router-link></li>
      <li class="nav-item"><router-link to="/about" tag='a' class='nav-link'>About</router-link></li>
      <li class="nav-item"><router-link to="/algorithms" tag='a' class='nav-link'>Algorithms</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css'; 

</style>

