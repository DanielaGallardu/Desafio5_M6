<script>
export default {
  name: 'Contacto',
};
</script>

<template>
  <section class="contact-page">
    <div class="container text-center">
      <h1>Contáctanos</h1>
      <p> Puedes comunicarte con nosotros a través de nuestras redes sociales.</p>
      
      <div class="social-media">
        <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
      </div>

      <router-link class="btn btn-outline-primary mt-4" to="/">Volver al Inicio</router-link>
    </div>
  </section>
</template>


<style scoped>
.contact-page {
  margin-top: 4rem;
  padding: 5rem 2rem;
  background-color: #f8f9fa;
}

.contact-page h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.contact-page p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.social-media a {
  margin: 0 1rem;
  color: #007bff;
}

.social-media i:hover {
  color: #0056b3;
}

.btn {
  padding: 1rem 2 rem;
  font-size: 1.2rem;
  background-color: #E83E8C;
  border-color: #ff008c;
  margin-bottom: 12.5rem;
}

.btn-outline-primary {
  color:white;
}

.btn-outline-primary:hover {
  background-color: #17A2B8;
  border-color: #17A2B8;
}

</style>
