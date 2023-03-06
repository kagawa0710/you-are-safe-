import { Box } from "@chakra-ui/react";

export function Task({
  title,
  startAt,
  meetingPlace,
  reward,
}) {
  return (
    <Box border='1px solid' borderRadius={8} p={4} fontSize={20}>
      <Box>タイトル: {title}</Box>
      <Box>集合時間: {startAt}</Box>
      <Box>集合場所: {meetingPlace}</Box>
      <Box>報酬: {reward}</Box>
    </Box>
  )
}
