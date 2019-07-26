Vue.component('hijo', {
    template: 
    `
    <div class="py-5 bg-success"> 
    <h2>Componente hijo:    {{ nombre }}</h2>
   <h4> {{ saludo }}</h4>
    </div>

    `,
    props: ['nombre'],

    data() {
        return{
            saludo: 'Gustavo'
        }
    },
    mounted() {
   this.$emit('saludoo', this.saludo)
    }
})