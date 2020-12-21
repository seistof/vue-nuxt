<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link no-prefetch class="nav-link" to="/" exact active-class="active">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about" active-class="active">
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/users" active-class="active">
              Users
            </nuxt-link>
          </li>
          <li v-if="!hasToken" class="nav-item">
            <nuxt-link class="nav-link" to="/login" active-class="active">
              Login
            </nuxt-link>
          </li>
          <li v-else class="nav-item">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>
