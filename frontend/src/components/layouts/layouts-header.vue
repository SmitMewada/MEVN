<template>
  <nav class="navbar navbar-light bg-info px-5">
    <a class="navbar-brand" href="#">
      <h2 class="d-inline-block align-top text-light">Student Registration</h2>
    </a>
    <div class="d-flex justify-content-around w-25">
      <router-link to="/" class="text-decoration-none text-light">
        Student form</router-link
      >
      <router-link to="/students" class="text-decoration-none text-light">
        View students</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>