import { ChakraProvider, Container } from '@chakra-ui/react'
import Set from './components/Set/Index'
import Run from './components/Run'

function App() {
  return (
    <ChakraProvider >
      <Container maxW="container.lg" height="100vh" py={4}>
        <Set />
      </Container>
      
    </ChakraProvider>
  )
}

export default App
