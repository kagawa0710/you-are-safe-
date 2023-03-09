import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
  Button,
} from '@chakra-ui/react'

export function Task({
  title,
  startAt,
  meetingPlace,
  reward,
}) {
  return (
    <Box border='1px solid' fontSize={20}>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>タイトル</Td>
              <Td>{title}</Td>
            </Tr>
            <Tr>
              <Td>集合時間</Td>
              <Td>{startAt}</Td>
            </Tr>
            <Tr>
              <Td>集合場所</Td>
              <Td>{meetingPlace}</Td>
            </Tr>
            <Tr>
              <Td>報酬</Td>
              <Td>{reward}円</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box textAlign={'right'}>
        <Button m={4}>詳細を見る</Button>
      </Box>
    </Box>
  )
}
