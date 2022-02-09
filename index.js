//crear componente
const Counter = {
    data(){
        return{
            contador: 0
        }
    },
    mounted(){
        setInterval(() => {this.contador++}, 1000)
    }
}

//binding attributes, as components
const BindingAttributes = {
    data(){
        return{
            message: "la fecha es " + new Date().toLocaleString()
        }
    }
}


const app = Vue.createApp(Counter)
app.mount("#contenedorApp")

const attributes = Vue.createApp(BindingAttributes).mount("#bind-attribute")

//event binding with v-on directive
const eventBinding = Vue.createApp({
    data(){
        return {
            texto: "Mucho texto al derecho y al reves"
        }
    },
    methods: {
        invertirTexto() {
            this.texto = this.texto.split("").reverse().join("")
        }
    }
})

eventBinding.mount("#event-binding")

//state binding with v-model directive
Vue
    .createApp({
        data(){
            return{
                mensaje: "Escriba un texto en el input"
            }
        }
    })
    .mount("#directiva-v-model")