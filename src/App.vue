<template>
<HelloWorld msg="Vue 3" />
<p>capacity: {{capacity}}</p>
<button @click="increaseCapacity()">increaseCapacity</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {
    ref
} from 'vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    setup() {
        const capacity = ref(3);

        function increaseCapacity() {
            console.log('increaseCapacity')
            capacity.value++;
        }

        return {
            capacity,
            increaseCapacity
        }
    }
}
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
