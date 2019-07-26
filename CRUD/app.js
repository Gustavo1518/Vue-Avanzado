const app = new Vue({
    el: '#app',
data: {
    titulo: 'Tareas Por Hacer ',
    tareas: [ {tarea: "Agraga una tarea"}],
    Nuevatarea: ""
},
methods: {
    agregar(){
    this.tareas.push({
    tarea: this.Nuevatarea
        });
    this.Nuevatarea = "";
    localStorage.setItem("gym-tareas", JSON.stringify(this.tareas));
    },
    edit(index){
console.log("Editar", index);
localStorage.setItem("gym-tareas", JSON.stringify(this.tareas));
    },
    Borrar(index){
       this.tareas.splice(index, 1);
       localStorage.setItem("gym-tareas", JSON.stringify(this.tareas));
    }
    },
created(){
    let datosDB = JSON.parse(localStorage.getItem("gym-tareas"));
    if(datosDB == null){
this.tareas = [];
    }else{
this.tareas = datosDB;
    }
}
})