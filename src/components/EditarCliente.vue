<template>
  <div>
    <h2>Cliente a Actualizar</h2>
    <form @submit.prevent="updCliente">
      <label>Nombre</label>&nbsp;
      <input type="text" name="nombre" v-model="cliente.nombre" /><br /><br />
      <label>Apellido</label>&nbsp;
      <input
        type="text"
        name="apellido"
        v-model="cliente.apellido"
      /><br /><br />
      <label>Correo</label>&nbsp;&nbsp;
      <input type="email" name="email" v-model="cliente.email" />
      <br /><br />
      <input type="submit" value="Actualizar cliente" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    const { id } = this.$route.params;
    return { id };
  },
  computed: {
    ...mapState(["cliente"]),
    ...mapState(["clienteId"]),
  },
  methods: {
      
      ...mapActions(['updCliente'])
  },
 
  mounted() {
    this.asignacionid(), this.getById();
  },
};
</script>

<style lang="scss" scoped>
</style>