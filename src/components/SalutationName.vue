<template>
  <select name="salutation" @change="updateSalutation">
    <option value>Choose...</option>
    <option
      :value="item"
      v-for="(item, index) in salutations"
      :key="index"
      :selected="salutation === item"
    >{{item}}</option>
  </select>

  <input type="text" :value="name" @input="updateName" />
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
    salutationModifiers: {
      default: () => ({}),
    },
    name: {
      type: String,
      default: "",
    },
    nameModifiers: {
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const updateSalutation = (event) => {
      let val = event.target.value;
      if (props.salutationModifiers.capitalize) {
        val = val.toUpperCase();
      }
      emit("update:salutation", val);
    };

    const updateName = (event) => {
      let val = event.target.value;
      if (props.nameModifiers.capitalize) {
        // val = val.charAt(0).toUpperCase + val.slice(1);
        // val = val.toUpperCase();
        val = val.charAt(0).toUpperCase()
      }
      emit("update:name", val);
    };

    return { salutations, updateName, updateSalutation };
  },
};
</script>