import { useEffect } from "react"
import { Flex, Button, FormLabel, HStack, Input, useNumberInput, Text, Box } from "@chakra-ui/react"

type NumberField = {
  label: string,
  field: string
}

export const NumberField = ({ label, setFields, defaultVal = 0, minimum = 0 }: any) => {
  const { valueAsNumber, getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: defaultVal,
      min: minimum,
      precision: 0,
      step: 1
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  useEffect(() => {
    setFields((prev: any) => ({ ...prev, [label]: valueAsNumber ? valueAsNumber : 0 }))
  }, [valueAsNumber])

  return <Flex direction="column" alignItems="center">
    <Text fontSize='3xl'>{label}</Text>
    <HStack spacing={3}>
      <Button {...dec} >-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  </Flex>


}



