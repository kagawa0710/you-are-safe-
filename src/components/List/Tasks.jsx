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
      <Box mt={4} mx={4}>
        <Link key={task.id} href={path}>
          <Task
            title={task.title}
            startAt={task.startAt}
            durationTime={task.durationTime}
            meetingPlace={task.meetingPlace}
            reward={task.reward}
            tagId={task.tagId}
          />
        </Link>
      </Box>
    );
  });
}
