<template>
  <HelloWorld msg="Vue 3" />
  <p>Spaces left {{spaceLeft}} from {{capacity}}</p>
  <p>capacity: {{capacity}}</p>
  <button @click="increaseCapacity()">increaseCapacity</button>
  <h2>Attending</h2>
  <ul>
    <li v-for="(item,index) in attending" :key="index">{{item}}</li>
  </ul>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { computed, ref } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const capacity = ref(3);
    const attending = ref(["john", "kenny", "bob"]);
    const spaceLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    function increaseCapacity() {
      console.log("increaseCapacity");
      capacity.value++;
    }

    return {
      capacity,
      attending,
      spaceLeft,
      increaseCapacity,
    };
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
