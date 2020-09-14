import { ref } from "vue";
export default function UsePromise(fn) {
    const results = ref(null);
    const loading = ref(null);
    const error = ref(null);

    const createPromise = async (...args) => {
        loading.value = true;
        error.value = null;
        results.value = null;
        try {
            // call api
            results.value = await fn(...args)
            // result.value = 10;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    }

    return { results, loading, error, createPromise };
}