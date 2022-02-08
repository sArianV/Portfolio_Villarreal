import * as React from 'react'
import { extendTheme, theme, ChakraProvider } from '@chakra-ui/react'
import Routes from "./routes/Routes.js"
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Routes />
    </ChakraProvider>
  )
}

export default App;
