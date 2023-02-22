import { Box } from "@chakra-ui/react";

export function Task({
  title,
  startAt,
  durationTime,
  meetingPlace,
  reward,
  tagId,
}) {
  return (
    <Box border='1px solid' borderRadius={8} p={4}>
      <Box>タイトル: {title}</Box>
      <Box>集合場所: {meetingPlace}</Box>
      <Box>集合時間: {startAt}</Box>
      <Box>所要時間: {durationTime}分</Box>
      <Box>報酬: {reward}円</Box>
      <Box>タグ: {tagId}</Box>
    </Box>
  )
}
