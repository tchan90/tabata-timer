import { useCallback, useEffect, useState } from 'react'
import { Button, Spacer, Flex } from '@chakra-ui/react'
import { NumberField } from './NumberField'


const Set = () => {
  const [formFields, setFormFields] = useState({
    prepare: 0,
    work: 0,
    rest: 0,
    cycles: 0
  })

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)


  useEffect(() => {
    const { prepare, work, rest, cycles } = formFields

    const total = prepare + ((work + rest) * cycles)
    setMinutes(parseInt(Math.floor(total / 60).toString().padStart(2, '0')))
    setSeconds(parseInt(Math.floor(total % 60).toString().padStart(2, '0')))
  }, [formFields])

  const handleSubmit = () => {
    console.log(formFields)
  }
  return <Flex direction="column" columnGap={12} alignContent="center" h="100%">
    {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
    <NumberField label="prepare" setFields={setFormFields} />
    <NumberField label="work" setFields={setFormFields} />
    <NumberField label="rest" setFields={setFormFields} />
    <NumberField label="cycles" setFields={setFormFields} defaultVal={1} minimum={1} />
    <Spacer />
    <Button onClick={handleSubmit} size="lg" colorScheme="green">Submit</Button>
  </Flex>
}

export default Set