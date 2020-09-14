<template>
  <select
    name="salutation"
    @change="$emit(
      'update:salutation',
      $event.target.value
  )"
  >
    <option value>Choose...</option>
    <option
      :value="item"
      v-for="(item, index) in salutations"
      :key="index"
      :selected="salutation === item"
    >{{item}}</option>
  </select>

  <input type="text" :value="name" @input="$emit(
    'update:name',
    $event.target.value
  )" />
</template>
<script>
const salutations = ["Mrs.", "Mr.", "Dr."];
export default {
  name: "SalutaionName",
  props: {
    salutation: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup() {
    return { salutations };
  },
};
</script>