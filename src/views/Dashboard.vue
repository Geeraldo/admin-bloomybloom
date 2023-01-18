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
              <h1>Dashboard</h1>
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
            <column-chart
              :data="[
                ['Sun', 32],
                ['Mon', 46],
                ['Tue', 28],
              ]"
            ></column-chart>
          </div>
          <!-- /.card-body -->
        </div>
      </section>
      <!-- /.content -->
      <div id="app">
        <v-app>
          <v-main>
            <v-row>
              <v-col
                lg="6"
                cols="12"
                v-for="(item, index) in activities"
                :key="index"
              >
                <v-card elevation="2" class="rounded-lg">
                  <v-card-text
                    class="d-flex justify-space-between align-center"
                  >
                    <div class="">
                      <strong>{{ item.title }}</strong
                      ><br />
                      <small>Last 2 Weeks</small>
                    </div>
                    <v-avatar :color="item.color" size="60">
                      <span class="white--text">{{ item.amouts }}</span>
                    </v-avatar>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-main>
        </v-app>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "../components/Footer.vue";
import NavbarVue from "../components/Navbar.vue";
import SidebarVue from "../components/Sidebar.vue";

export default {
  title: "Dashboard",
  name: "Dashboard",
  components: {
    SidebarVue,
    NavbarVue,
    FooterVue,
  },
  data() {
    return {
      activities: [
        { title: "Total Products", color: "red", amouts: 10 },
        { title: "Total Category", color: "purple", amouts: 2 },
        { title: "Total Orders", color: "indigo", amouts: 19 },
        { title: "Pending Orders", color: "light-blue", amouts: 3 },
      ],
    };
  },
};
</script>
