import { Box } from "@chakra-ui/react";
import tasks from "../../data/tasks";
import { Tasks } from "../components/CreatedTasks";

export default function CreatedTasks() {
  return (
    <>
      <Box mt={2} mx={4} fontSize={28}>
        作成した募集一覧
      </Box>
      <Tasks
        tasks={tasks()}
      />
    </>
  );
}
