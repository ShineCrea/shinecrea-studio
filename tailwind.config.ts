/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxlmin: '1351px',
      xxlmax: { max: '1350px' }
    },
    fontFamily: {
      display: ['pt-sans', 'sans-serif'],
      body: ['pt-sans', 'sans-serif'],
      title: ['fields', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px'
    },
    extend: {
      colors: {
        background: '#fcfbf8',
        primary: '#FFC800',
        secondary: '#F5F2E5',
        texte: '#1C190D',
        texte_secondary: '#3D3B32',
        dark: '#3D3B32',
        light: '#FCFAF7',
        texte_color: '#A18C45',
        element_color: '#EBE3CC'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem'
      },
      height: {
        '84': '22rem'
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw'
      },
      margin: {
        '-fullh': '-100vh'
      }
    },
    inset: {
      '0': 0,
      '16': '16px',
      '32': '32px',
      '64': '64px',
      '2rem': '2rem',
      '3rem': '3rem'
    }
  },
  variants: {},
  plugins: []
}
