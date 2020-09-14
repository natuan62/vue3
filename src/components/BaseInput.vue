<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit(
        'update:modelValue',
        $event.target.value
    )"
    />
    <button @click="getValue()">Get value input</button>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props) {
    function getValue() {
      console.log("modelvalue", props.modelValue);
    }

    return { getValue };
  },
};
</script>