<template>
  <div>
    <div class="d-flex justify-content-end m-5">
      <input
        type="text"
        name="search"
        placeholder="Search student"
        class="p-1"
        @keyup="searchHandler($event)"
      />
    </div>
    <Loader v-if="$store.state.students.loading" />
    <table class="table container mt-5" v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
          <th scope="col">Course</th>
          <th scope="col">College</th>
          <th scope="col">Country</th>
          <th scope="col">Is Published?</th>
          <th scope="col">Joining date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in allStudentsGetter" :key="index">
          <td scope="row">{{ student.name }}</td>
          <td scope="row">{{ student.email }}</td>
          <td scope="row">{{ student.phone }}</td>
          <td scope="row">{{ student.course }}</td>
          <td scope="row">{{ student.college }}</td>
          <td scope="row">{{ student.country.country }}</td>
          <td scope="row">{{ student.isPublished ? "Yes" : "No" }}</td>
          <td scope="row">{{ student.joiningDate }}</td>
          <td>
            <div
              class="actions d-flex justify-content-around align-items-center"
            >
              <router-link :to="'/student/' + student._id">
                <i class="fas fa-edit text-info"></i>
              </router-link>

              <i
                class="fas fa-trash text-danger"
                @click="deleteHandler(student._id)"
              ></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./students-view-all.js">
</script>

