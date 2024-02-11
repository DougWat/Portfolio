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
      xl: {'max':'1240px'},
      lg: {'max':'1024px'},
      md: {'max':'767px'},
      sm: {'max':'639px'},
      xs: {'max': '500px'}
    },
    extend: {
        fontFamily:{
          body: ["Poppins", "sans-serif"],
          header: ["Poppins", "sans-serif"],
          fvr: ["Libre Caslon Display","Poppins","sans-serif"]
        },
        colors:{
          primary:"#4DE191",
          "primary-light":"#08FDD8",
          secondary:"#14213D",
          "tmb-green":"#DFFF00",
          "tmb-blue":"#20F1FA"
        },
        backgroundColor:{
          green:'#C6F0C5',
          'light-green':'#D6F3D5',
          dark:'#1D1D1D',
          gray:'#847979',
          light:"#f5f5f5;",
          "tmb-dark-grey":"#111111",
          "tmb-light-grey":"#1E1E1E"
        },
        textColor:{
          light:'#D5D5D5',
          dark:'#664799'
        }
    },
  },
  plugins: [],
}
