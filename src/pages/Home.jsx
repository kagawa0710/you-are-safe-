import { Flex, Box, Link, Image, Text, Button, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import tasks from "../../data/tasks";

export default function Home() {
  if (tasks().length === 0) {
    return null;
  }
  const task = tasks()[0];
  const path = `/detail/${task.id}`;

  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        <Box mt={4} mx={4}>
          <Button colorScheme="orange" width="full" height="150px" marginBottom="24px">
            <Text fontSize="5xl">募集作成</Text>
          </Button>
          <Button colorScheme="teal" width="full" height="150px">
            <Flex direction="column">
              <Text fontSize="5xl">作成した</Text>
              <Text fontSize="5xl">募集一覧</Text>
            </Flex>
          </Button>
        </Box>
        <Box mt={4} mx={4}>
          <Link key={task.id} href={path}>
            <Box border="1px solid" borderRadius={8} p={4}>
              <Flex>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7br1bzBVg6pxikOK5YVMZA4zHcez6RXXWyg&usqp=CAU"
                  alt="防災訓練"
                  objectFit="cover"
                  height="100px"
                />
                <Flex direction="column" marginLeft={4}>
                  <Text fontSize="4xl" fontWeight="bold">
                    {task.title}
                  </Text>
                  <Flex>
                    <Text fontSize="lg" marginRight="4px">
                      {task.startAt}
                    </Text>
                    <Text fontSize="lg">{task.reward}円</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
}
