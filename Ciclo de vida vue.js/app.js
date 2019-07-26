const app = new Vue({
    el: '#app',
data: {
msg: "Ciclo de vida de vue.js",
},
beforeCreate() {
console.log("beforeCreate");
},
Created() {
    // Al crear los metodos, observadores y eventos, pero aun no accede al DOM
    // aun no se puede acceder a 'el
    console.log("Create");
},
beforeMount() {
    // se ejecuta antes de insertar el DOM
console.log("beforeMount");
},
mounted() {
    //Se ejecuta al insertar el DOM
console.log("mounted");
},
beforeUpdate() {
    // AL detectar un cambio
    console.log("beforeupdate");
},
updated() {
    // al realizar cambios
    console.log("update");
},
beforeDestroy(){
    // antes de destruir la instancia
    console.log("beforeDestroy");
},
destroyed() {
    // se destruye toda la instancia
    console.log("Destroyed");
},
methods: {
    destruir(){
        this.$destroy();
    }
}
})