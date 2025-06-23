import { defineCustomElement } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const HelloWorldElement = defineCustomElement(HelloWorld)
customElements.define('hello-world', HelloWorldElement)
