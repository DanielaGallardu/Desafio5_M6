<script>
export default {
  name: 'Inicio',
  data() {
    return {
      productos: [
        {
          nombre: 'Colaciones',
          imgSrc: '/img/colaciones.jpg',
          categoria: 'colaciones'
        },
        {
          nombre: 'Desayunos',
          imgSrc: '/img/desayunos.jpg',
          categoria: 'desayunos'
        },
        {
          nombre: 'Bebidas',
          imgSrc: '/img/bebidas.jpg',
          categoria: 'bebidas'
        },
        {
          nombre: 'Empanadas',
          imgSrc: '/img/empanadas.jpg',
          categoria: 'empanadas'
        },
        {
          nombre: 'Dulces',
          imgSrc: '/img/dulces.jpg',
          categoria: 'dulces'
        },
        {
          nombre: 'Verduras',
          imgSrc: '/img/verduras.jpg',
          categoria: 'verduras'
        }
      ]
    }
  }
}
</script>


<template>
  <div class="inicio-container">
    <header class="hero">
      <h1 class="hero-title">Productos Destacados</h1>
      <p class="hero-subtitle">Explora nuestros productos más populares</p>
    </header>
    <section class="featured-images">
      <router-link v-for="(producto, index) in productos" :key="index" :to="{ name: 'Productos' }">
        <img :src="producto.imgSrc" :alt="producto.nombre" class="product-img" />
      </router-link>
    </section>
    <div class="cta-container">
      <router-link to="/productos">
        <button class="cta-button">Ver Todos los Productos</button>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
}

.hero {
  color: #5f5c5c;
  padding: 3rem 1rem;
  text-align: center;
  width: 100%;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.hero-subtitle {
  padding-top: 1rem;
  font-size: 1.5rem;
}

.featured-images {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
}

.product-img {
  width: 18rem; 
  height: 12rem;
  object-fit: cover;
  display: block;
  border-radius: 0.6rem; 
  overflow: hidden;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
}

.cta-container {
  margin-top: 2rem;
}

.cta-button {
  background-color: #E83E8C; 
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #d02a6f; 
}
</style>