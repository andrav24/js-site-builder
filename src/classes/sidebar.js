import {block} from '../utils';
import {HeadingBlock, ParagraphBlock} from './blocks';

export class Sidebar {
  constructor(selector, updCallback) {
    this.$el = document.querySelector(selector)
    this.update = updCallback

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('heading'),
      block('paragraph')
    ].join('')
  }

  add(event) {
    event.preventDefault()
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value

    /*debugger*/
    let newBlock
    if (type === 'paragraph') {
      newBlock =new ParagraphBlock(value, {styles})
    } else if (type === 'heading') {
      newBlock =new HeadingBlock(value, {styles})
    }
    this.update(newBlock);

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}