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
import useEventSpace from "@/use/event-space";
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
} from "vue";
// use/event-mapping.js
//  import useMapping from "@/use/mapping";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // lifecycle hooks
    onBeforeMount(() => {});
    onMounted(() => {});

    onBeforeUpdate(() => {});
    onUpdated(() => {});

    onBeforeUnmount(() => {});
    onUnmounted(() => {});

    // vue2 newer lifecyle
    onActivated();
    onDeactivated();
    onErrorCaptured(() => {})

    // new vue3 lifecyle
    onRenderTracked();
    onRenderTriggered();

    return useEventSpace();
    // return { ...useEventSpace(), ...useMapping() }

    // const {
    //   capacity,
    //   attending,
    //   spacesLeft,
    //   increaseCapacity,
    // } = useEventSpace();
    // // const { map, embedId } = useMapping();
    // return { capacity, attending, spacesLeft, increaseCapacity };
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
