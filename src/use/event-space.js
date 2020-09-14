import { ref, computed } from "vue"
export default function useEventSpace() {
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
}