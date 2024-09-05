<script>
import SingleCard from '../components/SingleCard.vue'

export default {
  name: 'Productos',
  components: {
    SingleCard
  },
  data() {
    return {
      productos: [
        {
          nombre: 'Colaciones',
          descripcion: 'Pequeñas porciones listas para disfrutar en cualquier momento del día, ideales para una pausa rápida y deliciosa.',
          precio: 6500,
          imgSrc: '/img/colaciones.jpg'
        },
        {
          nombre: 'Desayunos',
          descripcion: 'Comienza el día con energía con nuestros desayunos variados y saludables, diseñados para todos los gustos.',
          precio: 12990,
          imgSrc: '/img/desayunos.jpg'
        },
        {
          nombre: 'Bebidas',
          descripcion: 'Refrescantes y deliciosas bebidas para acompañar cualquier comida o disfrutar en cualquier momento.',
          precio: 2990,
          imgSrc: '/img/bebidas.jpg'
        },
        {
          nombre: 'Empanadas',
          descripcion: 'Tradicionales empanadas caseras con rellenos variados, perfectas para una comida rápida y sabrosa.',
          precio: 2.500,
          imgSrc: '/img/empanadas.jpg'
        },
        {
          nombre: 'Dulces',
          descripcion: 'Una selección de dulces irresistibles para satisfacer tus antojos, perfectos para cualquier ocasión.',
          precio: 1000,
          imgSrc: '/img/dulces.jpg'
        },
        {
          nombre: 'Verduras',
          descripcion: 'Frescas y saludables verduras seleccionadas para preparar comidas nutritivas y balanceadas.',
          precio: 15000,
          imgSrc: '/img/verduras.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <h1>Nuestros Productos</h1>
    <section class="container" id="productos">
      <div class="row">
        <div 
          class="col-sm-4 col-12 px-5 mb-4" 
          v-for="(producto, index) in productos" 
          :key="index"
        >
          <!-- Componente SingleCard -->
          <SingleCard
            :nombre="producto.nombre"
            :descripcion="producto.descripcion"
            :precio="producto.precio"

            :img-src="producto.imgSrc"
          />
        </div>
      </div>
      <div class="col-12 text-center mt-4">
        <router-link class="btn btn-primary btn-sm" to="/">Volver al Inicio</router-link>
      </div>
    </section>
  </div>
</template>


<style scoped>
.btn-primary {
  background-color:#E83E8C; 
  border-color: #ff008c;
  margin-bottom: 2rem;
}

.btn-primary:hover {
  background-color: #17A2B8;
  border-color: #17A2B8;
}

.btn-sm {
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
}
</style>
