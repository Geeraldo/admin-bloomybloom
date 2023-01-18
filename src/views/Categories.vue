<template>
  <div class="wrapper">
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Categories</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="" @click="$router.push('/').catch(() => {})">Home</a>
                </li>
                <li class="breadcrumb-item active">Categories</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <h3 class="card-title">Category List</h3>
              <a
                href=""
                @click.prevent="$router.push('/category/add').catch(() => {})"
                >Add Category</a
              >
            </div>
          </div>
          <div class="card-body p-0">
            <table class="table table-striped projects">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(category, i) in $store.state.categories"
                  :key="category.id"
                >
                  <td>{{ i + 1 }}</td>
                  <td>{{ category.category }}</td>
                  <td class="project-actions text-right">
                    <a
                      class="btn btn-info btn-sm"
                      href="#"
                      @click.prevent="
                        $router
                          .push(`/category/update/${category.id}`)
                          .catch(() => {})
                      "
                    >
                      <i class="fas fa-pencil-alt"> </i>
                      Edit
                    </a>
                    <a
                      class="btn btn-danger btn-sm"
                      href="#"
                      @click.prevent="deleteCategory(category.id)"
                    >
                      <i class="fas fa-trash"> </i>
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </section>
      <!-- /.content -->
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";
export default {
  title: "Categories",
  name: "Categories",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    deleteCategory(id) {
      Swal.fire({
        title: "Are you sure?",
        text:
          "All Product in This Category Will Also Be Deleted. You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
        .then((result) => {
          if (result.isConfirmed) {
            return this.$store.dispatch("deleteCategory", id);
          } else if (result.isDenied) {
            return false;
          }
        })
        .then((data) => {
          if (!data) {
            Swal.fire("Changes are not saved", "", "info");
          } else {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            this.$store.dispatch("fetchCategories");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
