import { Box, Flex } from "@chakra-ui/react";
import { toMonthAndDayJP } from "../../libs/date"
import { iconSrc } from "../../icons/task"

export function Task({
  title,
  startAt,
  desc,
  meetingPlace,
  reward,
  iconId,
}) {
  return (
    <Box border='1px solid' borderRadius={8} p={4}>
      <Flex>
        <Box fontSize={12} my='auto'>{toMonthAndDayJP(startAt)}</Box>
        <Box fontSize={16} ml={8}>{title}</Box>
        <Box fontSize={14} ml='auto' my='auto'>￥{reward}</Box>
      </Flex>
      <Flex mt={2}>
        <Box minW='44px'>
          <img src={iconSrc(iconId)} />
        </Box>
        <Box ml={7}>
          <Box fontSize={12}>
            {desc}
          </Box>
          <Box fontSize={12} mt={2}>集合場所: {meetingPlace}</Box>
        </Box>
      </Flex>
      {/* <Box>タグ: {iconId}</Box> */}
    </Box>
  )
}
