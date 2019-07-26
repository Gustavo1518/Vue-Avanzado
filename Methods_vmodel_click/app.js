const app = new Vue({
    el: '#app',
data: {
    titulo: 'hola Mundo Vue.js',
    arreglo: [
        {Dia: "Lunes", Hora: 7},
        {Dia: "Martes", Hora: 8},
        {Dia: "Miercoles", Hora: 9}
    ],
    NuevoDia: ""
},
methods: {
agregar(){
this.arreglo.push({
Dia: this.NuevoDia
    });
}
}
})