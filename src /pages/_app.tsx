import '../../src/styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme, { gridTheme } from '../theme'
import type { AppProps } from 'next/app'
import '../font.css'

export default function App(props: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <props.Component {...props.pageProps} />
    </ThemeProvider>
  )
}
