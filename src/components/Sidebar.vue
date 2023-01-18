<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a
      href="#"
      class="brand-link text-center"
      @click.prevent="$router.push('/')"
    >
      <span class="brand-text font-weight-light"><b>BloomyBloom</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar layout-fixed">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              @click.prevent="$router.push('/dashboard')"
            >
              <i class="fas fa-fan"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="$router.push('/')">
              <i class="fas fa-fan"></i>
              <p>
                Products
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              @click.prevent="$router.push('/categories')"
            >
              <i class="fas fa-copy"></i>
              <p>
                Category
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
