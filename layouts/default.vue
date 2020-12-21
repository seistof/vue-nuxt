<template>
  <div>
    <Navbar/>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<style>

</style>
<script>
import Navbar from '../components/Navbar';

export default {
  components: {Navbar},
};
</script>
