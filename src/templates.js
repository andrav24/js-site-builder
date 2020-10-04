/*
  pure function
  т.е. зависят только от параметров и не зависят от глобального контекста.
  Это концепт из функционального программирования.
 */
function heading(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `
}

// pure function
function paragraph(block) {
  return `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
}

// pure function
function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
}

// pure function
function image(block) {
  return `
    <div class="row">
      <img src="${block.value}" />
    </div>
  `
}

// т.к. имена полей совпадают со значениями, то можно записать в таком виде
export const templates = {
  heading,
  paragraph,
  columns,
  image
}