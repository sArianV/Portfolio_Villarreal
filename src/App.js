import * as React from 'react'
import { extendTheme, theme, ChakraProvider } from '@chakra-ui/react'
import Routes from "./routes/Routes.js"
import './App.css'
/*
// 2. Add your color mode config
 const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config }) */


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme} >
      <Routes />
    </ChakraProvider>
  )
}

export default App;
