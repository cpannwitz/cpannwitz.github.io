import { createGlobalStyle, css } from 'styled-components'
// @ts-ignore
import config from '../../../config'

const GlobalStylesGeneral = css`
  @font-face {
    font-family: 'LeagueMono';
    src: url('../../../content/assets/LeagueMono-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Wotfard';
    src: url('../../../content/assets/Wotfard-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  html {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Wotfard', system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif;
    margin: 0 auto;
    max-width: unset;
    padding: unset;
    height: 100%;

    @media only screen and (max-width: ${config.maxWidth}px) {
      font-size: 16px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'LeagueMono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
  a[href^='mailto\:']:before {
    content: '';
  }
  a {
    transition: color 0.1s ease-in;
    &:hover {
      text-decoration: none;
      color: var(--links-active);
    }
  }

  svg {
    vertical-align: middle;
  }

  small {
    font-size: 80%;
    line-height: 1.4;
    color: var(--text-muted);
  }

  h1,
  h2,
  h3 {
    margin: 0;
    color: var(--text-main);
  }

  p {
    margin: 0.5rem 0;
  }

  #___gatsby {
    height: 100%;
  }
  #gatsby-focus-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;

    & > main {
      flex-grow: 1;
    }
  }
`

const GlobalStylesLight = css`
  :root {
    --background-body: #fff;
    --background-hover: hsl(0, 0%, 99%);
    --background: #efefef;
    --background-alt: #f7f7f7; /* bgcolor: tbody, details, dialog */
    --selection: #9e9e9e; /* DEF: bgcolor, selection of text via mouse/keyboard */
    --text-main: hsl(220, 10%, 21%);
    --text-bright: hsl(220, 10%, 0%); /* DEF: color, selection of text via mouse/keyboard && headlines*/
    --text-muted: hsl(220, 10%, 61%); /* DEF color in footer */
    --text-inverted: hsl(220, 10%, 80%);
    --links: hsl(206, 100%, 40%);
    --links-active: #dd4400;
    --focus: #005ea7; /* Tab outline color */
    --border: #dbdbdb;
    --code: #000;
    --animation-duration: 0.1s;
    --button-hover: #e7e7e7;
    --scrollbar-thumb: hsl(220, 10%, 80%); /* -5% LIGHT */
    --scrollbar-thumb-hover: hsl(220, 10%, 75%); /* -10% LIGHT */
    --form-placeholder: #949494;
    --form-text: #000;
    --variable: #39a33c;
    --highlight: #ff0;
    --shadow-default: 0 0 25px -8px hsla(0, 0%, 5%, 0.4);
  }
`
const GlobalStylesDark = css`
  :root {
    --background-body: hsl(220, 20%, 12%);
    --background-hover: hsl(220, 20%, 13%);
    --background: hsl(220, 25%, 18%);
    --background-alt: hsl(220, 30%, 20%);
    --selection: #1c76c5;
    --text-main: hsl(220, 10%, 80%);
    --text-bright: hsl(220, 10%, 100%);
    --text-muted: hsl(220, 10%, 50%);
    --text-inverted: hsl(220, 10%, 21%);
    --links: hsl(206, 100%, 50%);
    --links-active: #dd4400;
    --focus: hsl(206, 100%, 33%);
    --border: hsl(220, 30%, 30%);
    --code: #ffbe85;
    --animation-duration: 0.1s;
    --button-hover: hsl(208, 28%, 27%);
    --scrollbar-thumb: hsl(220, 30%, 30%); /* +5% LIGHT */
    --scrollbar-thumb-hover: hsl(220, 30%, 35%); /* +10% LIGHT */
    --form-placeholder: #a9a9c9;
    --form-text: #fff;
    --variable: #d941e2;
    --highlight: #efdb43;
    --shadow-default: 0 0 10px 0 hsla(0, 0%, 4%, 0.8);
  }
`

const GlobalStyles = createGlobalStyle<{ isDark?: boolean }>`
${p => (p.isDark ? GlobalStylesDark : GlobalStylesLight)}
${GlobalStylesGeneral}
`

export default GlobalStyles
