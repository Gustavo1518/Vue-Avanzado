const app = new Vue({
    el: '#app',
data: {
    titulo: 'hola Mundo Vue.js',
    arreglo: [
        {Dia: "Lunes", Hora: 7},
        {Dia: "Martes", Hora: 8},
        {Dia: "Miercoles", Hora: 9}
    ],
    NuevoDia: "",
    total: 0
},
methods: {
agregar(){
this.arreglo.push({
Dia: this.NuevoDia
    });
    return this.NuevoDia = "";
},
},
computed: {
    Sumarhoras(){
this.total=0;
for(horas of this.arreglo){
    this.total = this.total + horas.Hora;
}
return this.total;
    }
}
})