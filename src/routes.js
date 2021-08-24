import ListaClientes from './components/ListaClientes.vue'
import FormClientes from './components/FormClientes.vue'
import ClienteActualizar from './components/ClienteUpdate.vue'
import ClienteDelete from './components/ClienteDelete.vue'

export const routes = [
    {path:'/', component:ListaClientes},
    {path:'/editar/:id', component:ClienteActualizar},
    {path: '/clientes', component: FormClientes},
    {path: '/eliminar/:id', component: ClienteDelete}
]