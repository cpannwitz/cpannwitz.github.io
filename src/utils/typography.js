import Typography from "typography"
import typographyTheme from "typography-theme-alton"

typographyTheme.scaleRatio = 2.5
typographyTheme.baseLineHeight = 1.6
typographyTheme.blockMarginBottom = 0.8
typographyTheme.headerWeight = "normal"
typographyTheme.headerFontFamily = ["Assistant", "sans-serif"]
typographyTheme.bodyFontFamily = ["Assistant", "sans-serif"]
typographyTheme.overrideThemeStyles = () => {
  return {
    h1: {
      letterSpacing: "-1px",
    },
    "h2,h3,h4": {
      letterSpacing: "-0.5px",
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
