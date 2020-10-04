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
    type: 'image',
    value: image,
    options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center',
      },
      imageStyles: {
        width: '100%',
        height: '100%',
      },
      alt: 'this is a picture'
    }
  },
  {
    type: 'paragraph',
    value: 'here we go with some text',
    options: {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': '700',
        'margin-bottom': '5px',
      }
    }
  },
  {
    type: 'columns',
    value: [
      '1111111',
      '2222222',
      '3333333',
    ],
    options: {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': '700',
      }
    }
  },
]