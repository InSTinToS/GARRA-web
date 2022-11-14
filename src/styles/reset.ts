export const reset = {
  inputText: {
    'input[type="text"]': {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent'
    }
  },
  inputColor: {
    'input[type="color"]': {
      border: 'none',

      '&::-webkit-color-swatch': { border: 'none' },
      '&::-webkit-color-swatch-wrapper': { padding: 0 }
    }
  },
  button: {
    button: {
      cursor: 'pointer',

      border: 'none',
      backgroundColor: 'transparent',

      '&:disabled': { cursor: 'default' }
    }
  }
}
