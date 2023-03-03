import { Link, Box } from "@chakra-ui/react";
import { Task } from "./Task";

export function Tasks({
  tasks
}) {
  if (tasks.length === 0) {
    return null
  }

  return tasks.map((task) => {
    const path = `/detail/${task.id}`
    return (
      <Box key={task.id} mt={2} mx={4}>
        <Link href={path}>
          <Task
            title={task.title}
            startAt={task.startAt}
            desc={task.desc}
            meetingPlace={task.meetingPlace}
            reward={task.reward}
            iconId={task.iconId}
          />
        </Link>
      </Box>
    );
  });
}
