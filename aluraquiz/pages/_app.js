import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New Styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    //Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body{
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

//esse theme é recebido pelo theme dentro do {}
// const theme = {
//   colors: {
//     primary: '#0070f3',
//     secondary: '#70f300',
//   },
// }

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
