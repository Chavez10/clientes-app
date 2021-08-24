<template>
    <div>

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data(){
            const id = this.$route.params;

            return {id};
        },
        computed:{
            ...mapState(['cliente'])
        },
        methods:{
            asignaId(){
                this.$store.commit('obtenerClienteId', this.id) 
            },
            ...mapActions(['getById']),
            ...mapActions(['dltCliente'])
        },
        mounted(){
            this.asignaId();
            this.getById();

            let res = confirm('Desea eliminar al cliente '+this.cliente.nombre);
            if(res){
                this.dltCliente();
                alert('Usuario eliminado!');
                this.$route.push('/');
            }else{
                alert('Usuario no eliminado!');
                this.$route.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>