import * as React from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Layout from "./layout/Layout.js"
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme} >
      <Layout />
    </ChakraProvider>
  )
}

export default App;
