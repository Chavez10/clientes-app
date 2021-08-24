import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const urlEndPoint = 'http://localhost:9090/api/';
export const store = new Vuex.Store({
    state:{
        clientes:[],
        cliente:{},
        clienteId: null,
        mensaje: null
    },
    mutations:{
        obtenerClientes: state => {
            axios(urlEndPoint+'clientes')
            .then(res =>{
                //console.log(res.data)
                state.clientes = res.data
            })
        },
        obtenerClienteId: (state, num) => {
            state.clienteId = num
        },
        obtenerCliente:(state, cliente) => {
            state.cliente = cliente
        },
        clienteById: state => {
            axios(urlEndPoint+'clientes/'+state.clienteId)
            .then(res => {
                state.cliente = res.data
            }).catch(e => alert(e.response.data))
        },
        guardarCliente: state => {
            axios.post(urlEndPoint+'clientes', state.cliente)
            .then(res => {
                alert(res.data.mensaje);
                location.reload();
            }).catch(e => console.log(e.response.data))
            
        },
        clienteUpd: state => {
            axios.put(urlEndPoint+'clientes/'+state.clienteId, state.cliente)
            .then(res => {alert(res.data.mensaje); location.reload();})
            .catch(err => console.log(err.response.data))
        },
        clienteDelete: state => {
            const id = state.clienteId;
            console.log(id);
            axios.delete(urlEndPoint+'clientes/'+id)
            .then(res => alert(res.data.mensaje))
            .catch(err => console.log(err.response.data))
        }
    },
    actions:{
        getClientes(context){
            context.commit('obtenerClientes')
        },
        getById(context){
            context.commit('clienteById')
        },
        saveCliente(context){
            context.commit('guardarCliente')
        },
        updCliente(context){
            context.commit('clienteUpd')
        },
        dltCliente(context){
            context.commit('clienteDelete')
        }
    }
})