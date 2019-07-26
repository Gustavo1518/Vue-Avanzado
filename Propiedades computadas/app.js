const app = new Vue({
    el: '#app',
data: {
msg: "Hola mundo",
contador: 0
},
computed: {
    invertido(){
        return this.msg.split('').reverse().join('');
    },
    color(){
        return{
            'bg-success' : this.contador <= 10,
            'bg-warning' : this.contador > 10 && this.contador < 20,
            'bg-danger'   : this.contador >=20,
                }
    }
}
})