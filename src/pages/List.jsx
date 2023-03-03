import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Tasks, Filter, Sort } from "../components/List";
import tasks from "../../data/tasks";

export default function List() {
  return (
    <>
      <Tasks
        tasks={tasks()}
      />
      <Flex position="sticky" bottom={0} bg="white" p={4} w="full">
        <Spacer />
        <Box>
          <Filter/>
        </Box>
        <Spacer />
        <Box ml={4}>
          <Sort/>
        </Box>
        <Spacer />
      </Flex>
    </>
  );
}
