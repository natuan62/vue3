<template>
  <HelloWorld msg="Vue 3" />
  <p>Spaces left {{spaceLeft}} from {{capacity}}</p>
  <p>capacity: {{capacity}}</p>
  <button @click="increaseCapacity()">increaseCapacity</button>
  <h2>Attending</h2>
  <ul>
    <li v-for="(item,index) in attending" :key="index">{{item}}</li>
  </ul>
  <h2>watch example</h2>
  <div>
    search for
    <input type="text" v-model="searchInput" />
    <div>
      <p>Loading: {{loading}}</p>
      <p>Error: {{error}}</p>
      <p>number of events: {{result}}</p>
    </div>
    <!--
     <div>
      <p>Loading: {{ getEvents.loading }}</p>
      <p>Error: {{ getEvents.error }}</p>
      <p>Number of events: {{ getEvents.results }}</p>
    </div>
    -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import useEventSpace from "@/use/event-space";
import {
  // onActivated,
  // onBeforeMount,
  // onBeforeUnmount,
  // onBeforeUpdate,
  // onDeactivated,
  // onErrorCaptured,
  // onMounted,
  // onRenderTracked,
  // onRenderTriggered,
  // onUnmounted,
  // onUpdated,
  ref,
  watch,
  // watchEffect,
} from "vue";
// use/event-mapping.js
//  import useMapping from "@/use/mapping";
import usePrommise from "@/composables/use-promise";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // watch lesson
    const searchInput = ref("");

    const getEvents = usePrommise((keyword) =>
      eventApi.getEventCount(keyword.value)
    );

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        // loadData(searchInput);
        getEvents.createPromise(searchInput);
      } else {
        // result.value = null;
        getEvents.results.value = null;
      }
    });

    return { searchInput, ...getEvents };
    // return { searchInput, getEvents };

    // watchEffect(() => {
    //   // run every
    //   // result.value = eventApi.getEventCount(searchInput.value);
    //   result.value = 10;
    // });

    // specify
    // only if searchInput is changed
    // watch(
    //   searchInput,
    //   () => {
    //     result.value = 10;
    //   },
    //   { immediate: true }
    // );
    // watch(searchInput, (newVal, oldVal) => {});

    // multi watch
    // watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
    //   // bla bla
    // });

    // lifecycle hooks
    // onBeforeMount(() => {});
    // onMounted(() => {});

    // onBeforeUpdate(() => {});
    // onUpdated(() => {});

    // onBeforeUnmount(() => {});
    // onUnmounted(() => {});

    // // vue2 newer lifecyle
    // onActivated(() => {});
    // onDeactivated(() => {});
    // onErrorCaptured(() => {});

    // // new vue3 lifecyle
    // onRenderTracked(() => {});
    // onRenderTriggered(() => {});

    // return { searchInput, result, ...useEventSpace() };

    // return useEventSpace();
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
