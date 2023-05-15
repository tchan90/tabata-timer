import { Center, Container, Flex, Text } from "@chakra-ui/react";

const WorkTimer = (formFields: any) => {
  return (
    <Container centerContent>
      <Flex>
        <Center height="100vh">
          <Flex direction="column">
            <Text fontSize="6xl">120</Text>
            <Center>
              <Text fontSize="3xl">3:00</Text>
            </Center>
          </Flex>
        </Center>
      </Flex>
    </Container>
  );
};

export default WorkTimer;
