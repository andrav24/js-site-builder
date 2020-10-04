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
  const {styles} = block.options
  return row(col(`<p>${block.value}</p>`), css(styles))
}

// pure function
function columns(block) {
  const {styles} = block.options
  //const html = block.value.map(item => col(item))
  const html = block.value.map(col).join('')
  return row(html, css(styles))
}

// pure function
function image(block) {
  const {styles, imageStyles, alt = ''} = block.options

  return row(`<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
}

// названия функций записал в объект, чтобы этот объект передавать тому кому он нужен ...
// и уже у себя эта функция разберется, что из него взять.
// т.к. имена полей совпадают со значениями, то можно записать в таком виде
export const templates = {
  heading,
  paragraph,
  columns,
  image
}