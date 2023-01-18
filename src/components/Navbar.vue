<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>

    <!-- Right navbar links -->

    <ul class="navbar-nav ml-auto">
      <CDropdown
        inNav
        class="c-header-nav-items"
        placement="bottom-end"
        add-menu-classes="pt-0"
      >
        <template #toggler>
          <CHeaderNavLink>
            <div class="c-avatar">
              <img src="images/Userr.jpg" class="c-avatar-img " />
            </div>
          </CHeaderNavLink>
        </template>
        <CDropdownHeader tag="div" class="text-center" color="light">
          <strong>Hello!</strong>
          <strong>Admin</strong>
        </CDropdownHeader>

        <CDropdownItem
          ><CIcon name="cil-lock-locked" /><a @click.prevent="submitLogout">
            Logout</a
          ></CDropdownItem
        >
      </CDropdown>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    submitLogout() {
      localStorage.removeItem("access_token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
  width: 20px;
}
</style>
