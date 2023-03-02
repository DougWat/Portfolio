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
          body: ["Open Sans", "sans-serif"],
          header: ["Recoleta", "serif"],
        },
        colors:{
          primary:"#4DE191",
          "primary-light":"#08FDD8",
          secondary:"#14213D"
        },
        backgroundColor:{
          dark:'#1D1D1D',
          gray:'#847979',
          light:"#f5f5f5;"
        },
        textColor:{
          light:'#FFFBFF',
          dark:'#0B0A07'
        }
    },
  },
  plugins: [],
}
