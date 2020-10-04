import image from './assets/image.jpg'

export const model = [
  {
    type: 'heading',
    value: 'Hello world!!!!!',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
      }
    }
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
    value: image
  }
]