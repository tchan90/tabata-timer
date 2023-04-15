import { Center, SimpleGrid, Stack } from '@chakra-ui/react'
import { NumberField } from './NumberField'


const Set = () => {

  return <Stack spacing={3}>
    <NumberField label="Prepare" field="prepare" />
    <NumberField label="Work" field="work" />
    <NumberField label="Rest" field="work" />
    <NumberField label="Cycles" field="cycles" />
  </Stack>

}

export default Set