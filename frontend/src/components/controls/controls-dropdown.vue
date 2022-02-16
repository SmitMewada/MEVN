<template>
  <div class="mt-3 select-btn">
    <label for="">{{ label }}</label>
    <select
      class="p-2 form-control"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="value"

    >
      <option value="">{{ `Select ${label}` }}</option>
      <option :value="option._id" v-for="option in options" :key="option.id">
        {{ option.country }}
      </option>
    </select>

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
  name: "Dropdown",
  props: {
    label: String,
    options: Array,
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

<style>
.select-btn {
  display: flex;
  flex-direction: column;
}
</style>