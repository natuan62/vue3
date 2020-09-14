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
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: [String, Model],
      default: "",
    },
  },
  setup(props) {
      
  },
};
</script>