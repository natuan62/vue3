<template>
  <h2>Hello {{message}}</h2>
</template>
<script>
import {ref} from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const message = ref("Vue 3");

    return {message}
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
