import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Box,
} from '@chakra-ui/react'
import tasks from "../../data/tasks";
import { useParams } from 'react-router-dom';

export default function CreatedTask() {
  const { id } = useParams();
  const task = tasks().find(element => element.id === parseInt(id))
  if (task === undefined) {
    return null
  }
  const {title, startAt, meetingPlace, reward, desc} = task

  return (
    <Box>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td fontSize={20}>タイトル</Td>
              <Td fontSize={24}>{title}</Td>
            </Tr>
            <Tr>
              <Td fontSize={20}>集合時間</Td>
              <Td fontSize={24}>{startAt}</Td>
            </Tr>
            <Tr>
              <Td fontSize={20}>集合場所</Td>
              <Td fontSize={24}>{meetingPlace}</Td>
            </Tr>
            <Tr>
              <Td fontSize={20}>報酬</Td>
              <Td fontSize={24}>{reward}円</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box m={6}>
        <Box fontSize={20}>
          詳細説明
        </Box>
        <Box mt={4} fontSize={24}>
          {desc}
        </Box>
      </Box>
    </Box>
  );
}
