<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-img-wrapper">
        <img :src="imgSrc" class="card-img-top" :alt="nombre" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
        <p class="card-price">Precio: ${{ precio }}</p>
      </div>
      <div class="card-footer">
        <router-link class="card-link" to="/">Ver más</router-link>
        <router-link class="card-link" to="/">Comprar</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card {
  width: 100%;
  max-width: 22rem;
  height: 28rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.9375rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1); 
  overflow: hidden;
  background-color: #fff;
  text-align: center;
}

.card:hover {
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2); 
}

.card-img-wrapper {
  width: 100%;
  height: 13rem; 
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.6rem; 
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.9rem;
  color: #555;
}

.card-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff00c8;
  margin-bottom: 0.6rem; 
}

.card-footer {
  padding: 1rem; 
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
}

.card-footer .card-link {
  font-size: 1rem;
  color: #17A2B8;
  text-decoration: none;
  margin-right: 0.6rem; 
  
}

.card-footer .card-link:hover {
  color: #0056b3;
}
</style>
