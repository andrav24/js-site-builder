import {row, col, css} from './utils'

/*
  pure function
  т.е. зависят только от параметров и не зависят от глобального контекста.
  Это концепт из функционального программирования.
 */
function heading(block) {
  /*const tag = block.options.tag ?? 'h1'
  const styles = block.options.styles ?? ''*/
  const {tag = 'h1', styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

// pure function
function paragraph(block) {
  return row(col(`<p>${block.value}</p>`))
}

// pure function
function columns(block) {
  //const html = block.value.map(item => col(item))
  const html = block.value.map(col).join('')
  return row(html)
}

// pure function
function image(block) {
  return row(`<img src="${block.value}" />`)
}

// т.к. имена полей совпадают со значениями, то можно записать в таком виде
export const templates = {
  heading,
  paragraph,
  columns,
  image
}