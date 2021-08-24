<template>
    <div>
        <h3>Actualizar Cliente</h3>
        <form @submit.prevent="actuaCliente">
            <label>Nombre</label>
            <input type="text" v-model="cliente.nombre"><br><br>

            <label>Apellido</label>
            <input type="text" v-model="cliente.apellido"><br><br>

            <label>Correo Electronico</label>
            <input type="text" v-model="cliente.email"><br><br>

            <input type="submit" value="Actualizar">

        </form>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

    export default {
        data(){
            const {id} = this.$route.params;
            return {id};
        },
        computed:{
            ...mapState(['cliente']),
            ...mapState(['clienteId'])
        },
        methods:{
            asignacionId(){
                this.$store.commit('obtenerClienteId', this.id)
            },
            actuaCliente(){
                const date = Date.now();
                const now = new Date(date);
                let create = now.toISOString();

                const client = {
                    nombre: this.cliente.nombre,
                    apellido: this.cliente.apellido,
                    email: this.cliente.email,
                    createAt: create.substring(0,10)
                };

                this.$store.commit('obtenerCliente', client);
                this.updCliente();
                this.$router.push('/');

            },


            ...mapActions(['updCliente']),
            ...mapActions(['getById'])
        },
        mounted(){
           this.asignacionId();
           this.getById();
           
        }
    }
</script>

<style lang="scss" scoped>

</style>