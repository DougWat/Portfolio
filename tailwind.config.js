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
          body: ["DM Sans", "sans-serif"],
          header: ["Quicksand", "sans-serif"],
        },
        colors:{
          primary:"#EE8C1C",
          secondary:"#14213D"
        },
        backgroundColor:{
          dark:'#1F2126',
          gray:'#847979',
          light:"f7f7f7"
        },
        textColor:{
          light:'#FFFBFF',
          dark:'#0B0A07'
        }
    },
  },
  plugins: [],
}
