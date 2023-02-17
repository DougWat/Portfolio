module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './src/**/*.liquid',
    './src/styles/partials/*.css'
  ],
  theme: {
    screens: {
      xl: {'max':'1279px'},
      lg: {'max':'1023px'},
      md: {'max':'767px'},
      sm: {'max':'639px'},
      xs: {'max': '500px'}
    },
    extend: {
        fontFamily:{
          body: ["DM Sans", "sans-serif"],
          header: ["DM Sans", "sans-serif"],
        },
        colors:{
          green:'#DFFF00',
          blue:"#20F1FA",
          'dark-blue':"#006792",
          orange:"#FF8D3A"
        },
        backgroundColor:{
          dark:'#0B0B0B',
          gray:'#1C1C1C'
        },
        textColor:{
          light:'#FFFFFF',
          dark:'#000'
        }
    },
  },
  plugins: [],
}
