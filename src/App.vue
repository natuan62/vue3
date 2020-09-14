<template>
  <h2>Hello {{message}}</h2>
  <BaseInput v-model="inputValue" />
  <h2>Salutations component</h2>
  <SalutationName v-model:salutation="salutation" v-model:name="name" />
  <button @click="viewValue()">View value</button>
</template>
<script>
import { reactive, toRefs } from "vue";
import BaseInput from "@/components/BaseInput";
import SalutationName from "@/components/SalutationName";
export default {
  name: "App",
  components: { BaseInput, SalutationName },
  setup() {
    // const message = ref("Vue 3");

    // new v-model
    // const inputValue = ref("");

    // multi v-model
    // const salutation = ref("");
    // const name = ref("");

    // return { salutation, name, message, inputValue };

    const event = reactive({
      message: "vue 3",
      inputValue: "",
      salutation: "",
      name: "",
    });

    function viewValue() {
      console.log("viewValue()", event.salutation, event.name);
    }
    // return { ...toRefs(event), viewValue };
    return { ...toRefs(event), viewValue };
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
