import Typography from "typography"
import typographyTheme from "typography-theme-alton"

typographyTheme.scaleRatio = 2.5
typographyTheme.baseLineHeight = 1.6
typographyTheme.headerWeight = "normal"
typographyTheme.headerFontFamily = ["Assistant", "sans-serif"]
typographyTheme.bodyFontFamily = ["Assistant", "sans-serif"]
typographyTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      letterSpacing: "-2px",
    },
    "h2,h3,h4": {
      letterSpacing: "-1px",
      textShadow: "rgb(30, 45, 71) 1px 1px",
    },
  }
}

delete typographyTheme.googleFonts

const typography = new Typography(typographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
