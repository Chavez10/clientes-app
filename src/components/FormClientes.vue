<template>
  <div>
    <h3>Registra un nuevo cliente</h3>
    <form @submit.prevent="asignarCliente">
      <label>Nombre</label>&nbsp;
      <input type="text" v-model="nombre" /><br /><br />
      <label>Apellido</label>&nbsp;
      <input type="text" v-model="apellido" /><br /><br />
      <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="email" v-model="email" />
      <br /><br />

      <input type="submit" value="Guardar Registro" />
    </form>
   
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      email: null,
    };
  },
  computed: {
    ...mapState(["cliente"]),
    ...mapState(['mensaje'])
  },
  methods: {
    asignarCliente() {
      const cliente = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
      };
      this.$store.commit("obtenerCliente", cliente);
      this.saveCliente();
      this.$router.push('/')
    },
    ...mapActions(["saveCliente"]),
  },
};
</script>

<style lang="scss" scoped>
</style>