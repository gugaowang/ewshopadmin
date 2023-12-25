<template>
  <div>

      <router-view></router-view>
      <router-link to="/login"><a>我很流弊</a></router-link>
  </div>

</template>

<script setup lang="ts">




</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin-top: 10px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
a{
   display: block;
   text-align: center;
}
</style>
