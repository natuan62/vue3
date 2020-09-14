<template>
  <h2>Hello {{message}}</h2>
  <BaseInput v-model="inputValue" />
</template>
<script>
import { ref } from "vue";
import BaseInput from "@/components/BaseInput";
export default {
  name: "App",
  components: { BaseInput },
  setup() {
    const message = ref("Vue 3");

    // new v-model
    const inputValue = ref("");
    return { message, inputValue };
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
