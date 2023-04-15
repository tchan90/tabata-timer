import { ChakraProvider } from '@chakra-ui/react'
import Set from './components/Set/Index'
import Run from './components/Run'

function App() {
  return (
    <ChakraProvider>
      <Set />
    </ChakraProvider>
  )
}

export default App
