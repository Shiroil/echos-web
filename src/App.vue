<template>
  <!-- <nav>
    <v-btn @click="toggleTheme">Home</v-btn> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme()

const toggleTheme = (() => {
  console.log(theme)
  theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomLightTheme2' 
})

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
