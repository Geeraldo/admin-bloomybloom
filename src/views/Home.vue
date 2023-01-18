<template>
  <div class="wrapper">
    <NavbarVue />
    <SidebarVue />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Products</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item active">Home</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="card">
          <div class="card-body">
            <div class="tab-content p-0">
              <zing-grid
                v-if="$store.state.categoriesString !== ''"
                caption="List"
                editor-controls
                pager
                filter
                search
                sort
                zebra
                gridlines="both"
                page-size="10"
                page-size-card="10"
                page-size-options="2,4,10,20"
                layout="row"
                role="grid"
                editor="inline"
                viewport="tablet-portrait"
                theme="ios"
              >
                <zg-data src="https://easy-gray-turkey-wig.cyclic.app/products/">
                  <zg-param name="idKey" value="id"></zg-param>
                  <zg-param name="headers" :value="access_token"></zg-param>
                  <zg-column
                    index="image_url"
                    type="image"
                    content-style="height: 150px;"
                    header="Image"
                  ></zg-column>
                  <zg-column index="name"></zg-column>
                  <zg-column index="price"></zg-column>
                  <zg-column index="stock"></zg-column>
                  <zg-column
                    index="category"
                    type="select"
                    :type-select-options="$store.state.categoriesString"
                  ></zg-column>
                </zg-data>
              </zing-grid>
              <p v-else>Loading</p>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
      </section>
      <!-- /.content -->
    </div>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "../components/Footer.vue";
import NavbarVue from "../components/Navbar.vue";
import SidebarVue from "../components/Sidebar.vue";

export default {
  title: "products",
  name: "Home",
  components: {
    SidebarVue,
    NavbarVue,
    FooterVue,
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchCategories");
  },
  data() {
    return {
      searchData: {
        search: "",
        category: "Flower Bouquet",
      },
      categories: [],
    };
  },
  computed: {
    categoryNames() {
      return this.$store.getters.categoryNames;
    },
  },
  methods: {
    searchProduct() {
      if (this.searchData.search !== null)
        this.$store.dispatch("search", this.searchData);
      else this.$store.dispatch("fetchProducts", this.searchData.category);
    },
  },
};
</script>
