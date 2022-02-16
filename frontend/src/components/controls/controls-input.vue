<template>
  <div class="form-group mt-3">
    <label>{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :value="value"
    />
    
    <small
      class="form-text text-danger d-block"
      v-for="(error, index) in errors[name]"
      :key="index"
      >{{ error }}</small
    >
  </div>

</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    label: String,
    name: String,
    value: String
  },
  data() {
    return {
      errors: this.$store.state.students.errors,
    };
  },
};
</script>
