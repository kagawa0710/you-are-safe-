import { Box } from "@chakra-ui/react";
import tasks from "../../data/tasks";
import { useParams } from 'react-router-dom';

export default function CreatedTask() {
  const { id } = useParams();
  const task = tasks().find(element => element.id === parseInt(id))
  if (task === undefined) {
    return null
  }

  return (
    <Box p={4} fontSize={28}>
      <Box>タイトル: {task.title}</Box>
      <Box>集合時間: {task.startAt}</Box>
      <Box>集合場所: {task.meetingPlace}</Box>
      <Box>報酬: {task.reward}</Box>
      <Box>説明: {task.desc}</Box>
    </Box>
  );
}
