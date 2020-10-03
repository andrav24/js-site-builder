const model = [
  {
    type: 'heading',
    value: 'Hello world!',
  },
  {
    type: 'paragraph',
    value: 'here we go with some text',
  },
  {
    type: 'columns',
    value: [
        '1111111',
        '2222222',
        '3333333',
    ],
  },
  {
    type: 'image',
    value: './assets/image.jpg'
  }
]

const $site = document.querySelector('#site')

model.forEach(block => {
  let html = ''

  if (block.type === 'heading') {
    html = heading(block)

  } else if (block.type === 'paragraph') {
    html = paragraph(block)

  } else if (block.type === 'columns') {
    html = columns(block)
  } else if (block.type === 'image') {
    html = image(block)
  }

  $site.insertAdjacentHTML('beforeend', html)

})

function heading(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `
}

function paragraph(block) {
  return `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
}

function image(block) {
  return `
    <div class="row">
      <img src="${block.value}" />
    </div>
  `
}