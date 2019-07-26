Vue.component('padre', {
template: 
`
<div class="p-5 bg-dark text-white">
<h1> Componente padre: {{ numeropadre }} </h1>
<button @click="numeropadre++"> Aumentar</button>
<h1>{{ salud }}</h1>
<button @click="numeropadre--"> Decrementar</button>
<hijo :nombre="numeropadre" @saludoo="salud = $event"><hijo>
</div>

`,
data (){
    return {
        numeropadre: 0,
        salud: ''
    }
}
})