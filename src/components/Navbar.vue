<script>
export default {
  name: 'Navbar',
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container px-4">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="logo de suricata" />
      </router-link>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped>
.navbar {
  background-color: #E83E8C; 
}

.nav-link {
  color: white; 
}

.nav-link:hover {
  color: #8f2757;
}


</style>
