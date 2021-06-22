module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      body: [
        '"游ゴシック体"',
        'YuGothic',
        '"游ゴシック Medium"',
        '"Yu Gothic Medium"',
        '"游ゴシック"',
        '"Yu Gothic"',
        'sans-serif',
      ],
      sans: ['"Josefin Sans"'],
    },
    colors: {
      black: {
        DEFAULT: '#1A2C44',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#848D9A',
      },
    },
    backgroundColor: {
      gray: '#E5E5E5',
      black: '#1A2C44',
    },
    extend: {
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
      },
    },
  },
}
