import {model} from './model'   // named import
import './styles/main.css'

const $site = document.querySelector('#site')

/*const key = 'heading'
console.log(templates[key]);
console.log(templates[key]({value: 'test'}));*/

model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML())
})