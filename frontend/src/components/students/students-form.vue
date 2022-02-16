<template>
<Loader v-if="$store.state.students.loading" />
  <div class="container w-50 mt-5" v-else>
    <form autocomplete="off" @submit="submitHandler($event)">
      <Input
        placeholder="Enter your name"
        label="Name"
        type="text"
        v-model="student.name"
        name="name"
        @keyup="validateControl($event, errorsState)"
        :value="student.name"
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        type="text"
        v-model="student.email"
        name="email"
        @keyup="validateControl($event, errorsState)"
        :value="student.email"
      />
      <Input
        placeholder="Enter your course"
        label="Course"
        type="text"
        v-model="student.course"
        name="course"
        @keyup="validateControl($event, errorsState)"
        :value="student.course"
      />
      <Input
        placeholder="Enter your college"
        label="College"
        type="text"
        v-model="student.college"
        name="college"
        @keyup="validateControl($event, errorsState)"
        :value="student.college"
      />
      <Input
        placeholder="Enter your phone"
        label="Phone"
        type="text"
        v-model="student.phone"
        name="phone"
        @keyup="validateControl($event, errorsState, { exact: 10 })"
        :value="student.phone"
      />

      <BinaryRadio
        :data="radioData"
        label="is Published?"
        v-model="student.isPublished"
        :value="student.isPublished ? 'yes' : 'no'"
      />

      <Dropdown
        label="Country"
        :options="getCountries"
        v-model="student.country"
        name="country"
        @change="validateControl($event, errorsState)"
        :value="student.country"
      />

      <Input
        type="date"
        v-model="student.joiningDate"
        name="joiningDate"
        @change="validateControl($event, errorsState, { date: 'futureDate' })"
        :value="student.joiningDate"
      />
      <button type="submit" class="btn btn-info mt-3 text-light">Submit</button>
    </form>
  </div>
</template>

<script src="./students-form.js">
</script>
