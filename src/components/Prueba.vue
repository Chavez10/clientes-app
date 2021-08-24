<template>
    <div>

    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        methods:{
            ...mapActions(['updCliente'])
        },

        mounted(){
            this.updCliente
        }
    }
</script>

<style lang="scss" scoped>

</style>