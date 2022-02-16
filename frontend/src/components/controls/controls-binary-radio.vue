<template>
  <div class="form-control mt-3">
    <label for="">{{ label }}</label>

    <div class="form-check" v-for="(item, index) in data" :key="index">
      <input
        class="form-check-input"
        type="radio"
        :name="label"
        :value="item.value"
        @input="$emit('update:modelValue', $event.target.value)"
        :checked='value === item.value'
      />
      <label class="form-check-label">
        {{ item.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BinaryRadio",
  props: {
    label: String,
    data: Array,
    value: String
  },
};
</script>

