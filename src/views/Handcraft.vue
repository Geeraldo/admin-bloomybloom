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
              <h1>Hand Craft</h1>
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
          <div class="card-header">
            <div class="d-flex justify-content-between"></div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="tab-content p-0">
              <zing-grid
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
                <zg-data src="https://easy-gray-turkey-wig.cyclic.app/handcraft/">
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
                </zg-data>
              </zing-grid>
              tabel
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
  name: "Handcraft",
  components: {
    SidebarVue,
    NavbarVue,
    FooterVue,
  },
  created() {
    if (!localStorage.acces_token) {
      this.$router.push("/login");
    } else {
      this.$store.dispatch("fetch HandCraft");
    }
  },
};
</script>
