<template>
  <div
    class=" bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 space-y-12  flex flex-col flex-wrap w-screen h-screen"
  >
    <div id="btn-nuevo" class=" w-full justify-center   ">
      <router-link
        class=" font-bold border-2 border-yellow-500 py-3 px-3 bg-black hover:bg-white hover:text-black text-base text-white rounded-md leading-none"
        tag="button"
        to="/clientes"
        >Nuevo Cliente</router-link
      >
    </div>
    <div class=" w-full justify-center flex  py-4 ">
      <table
        class=" border-collapse border-2 border-black bg-wdhite text-white "
      >
        <thead>
          <tr class=" border-black border">
            <th class=" border-black border ">Id</th>
            <th class=" border border-black ">Nombre</th>
            <th class=" border border-black ">Apellido</th>
            <th class=" border border-black ">Correo</th>
            <th class=" border border-black ">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cli in clientes" :key="cli.id">
            <td class=" border-black border leading-8 px-2 py-1">
              {{ cli.id }}
            </td>
            <td class=" border-black border leading-8 px-2 py-1">
              {{ cli.nombre }}
            </td>
            <td class=" border-black border leading-8 px-2 py-1">
              {{ cli.apellido }}
            </td>
            <td class=" border-black border leading-8 px-2 py-1">
              {{ cli.email }}
            </td>
            <td class=" border-black border leading-8 px-2 py-1 space-x-2">
              <router-link
                exact
                :to="'/editar/' + cli.id"
                class="  border px-2 py-1 text-black leading-none rounded-md text-base font-medium  bg-green-500 "
                >Editar</router-link
              >
              <button
                @click="eliminar(cli.id)"
                class=" px-2 py-1 leading-none text-black bg-red-400 font-medium rounded-md border text-base"
              >
                Eliminar
              </button>
              <!-- <router-link exact :to="'/eliminar/'+cli.id">Eliminar</router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["clientes"]),
    ...mapState(["cliente"]),
  },
  methods: {
    ...mapActions(["getClientes"]),
    ...mapActions(["dltCliente"]),
    ...mapActions(["getById"]),
    eliminar(id) {
      this.$store.commit("obtenerClienteId", id);

      let res = confirm(`Desea eliminar al id ${id}?`);
      if (res) {
        this.dltCliente();
        location.reload();
      }
    },
  },
  mounted() {
    this.getClientes();
  },
};
</script>

<style scoped>
#btn-nuevo {
  position: absolute;
  left: 0;
}
</style>
