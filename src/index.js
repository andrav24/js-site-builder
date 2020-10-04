import {model} from './model'   // named import
import {templates} from './templates';
import './styles/main.css'

const $site = document.querySelector('#site')

/*const key = 'heading'
console.log(templates[key]);
console.log(templates[key]({value: 'test'}));*/

model.forEach(block => {
  const toHTML = templates[block.type]
  if (toHTML) {
    $site.insertAdjacentHTML('beforeend', toHTML(block))
  }
})