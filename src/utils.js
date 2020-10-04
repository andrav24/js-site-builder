export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

// преобразовывает объект со стилями в строку
export function css(styles = {}) {
  // Наиболее оптимальный способ итерации по объекту
  /*const keys = Object.keys(styles)
  const array = keys.map(key => {
    return `${key}: ${styles[key]}`
  })
  return array.join(';')*/

  // более красивый вид того, что написано выше
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}