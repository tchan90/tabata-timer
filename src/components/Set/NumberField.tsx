import { Button, FormControl, FormLabel, HStack, Input, useNumberInput } from "@chakra-ui/react"

type NumberField = {
  label: string,
  field: string
}

export const NumberField = ({ label, field }: NumberField) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 0,
      min: 0,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return <FormControl>
    <FormLabel>{label}</FormLabel>
    <HStack maxW='100%'>
      <Button {...dec}>-</Button>
      <Input {...input}/>
      <Button {...inc}>+</Button>
    </HStack>
  </FormControl>
}



