/* instanciamos Vue, practicamente le decimos a vue que dentro de
nuestro Id que se encuentra en nuestro documento html, todo 
lo que se encuentre dentro se manejara con vue.js*/
const app = new Vue({
    // detectamos nuestro Id que esta en nuestro html
    el: '#app',
    // los datos se manejan atravez de data
data: {
    // dato
    msg: 'Yolanda Mi Picarona Hermosa Te Amo',
    array: [{Nombre: "Yolanda", edad: 18, localidad: "Ajusco"},
    {Nombre: "Yola", edad: 18, localidad: "Ajusco"},
    {Nombre: "afa", edad: 18, localidad: "Ajusco"},
    {Nombre: "add", edad: 18, localidad: "Ajusco"},
    {Nombre: "adwD", edad: 18, localidad: "Ajusco"}],

    peliculas: [{Nombre: "eso", edad: 3, localidad: "cinemex"},
    {Nombre: "Yola", edad: 18, localidad: "Ajusco"},
    {Nombre: "afa", edad: 18, localidad: "Ajusco"},
    {Nombre: "add", edad: 18, localidad: "Ajusco"},
    {Nombre: "adwD", edad: 18, localidad: "Ajusco"}],

    delegaciones: [{Nombre: "Tlalpan", edad: 14, localidad: "CDMX"},
    {Nombre: "Yola", edad: 18, localidad: "Ajusco"},
    {Nombre: "afa", edad: 18, localidad: "Ajusco"},
    {Nombre: "add", edad: 18, localidad: "Ajusco"},
    {Nombre: "adwD", edad: 18, localidad: "Ajusco"}]
}
})