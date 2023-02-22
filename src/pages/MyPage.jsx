// マイページ　'my-page'にアクセスしたときに表示されるページ

import {
  Switch,
  Box,
  FormControl,
  FormLabel,
  Text,
  Stack,
  Flex,
  Spacer,
  Icon,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaRegEnvelope, FaLock, FaRegUser, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";

import tasks from "../../data/tasks";
import { Tasks, Filter, Sort } from "../components/List";

export default function MyPage() {
  const {
    scrollRef,
    onScroll,
    scrollToBottom,
    isOnBottom,
    unviewedMessageCount,
  } = useAppContext();

  return (
    <Box
      bg="white"
      p="5"
      overflow="auto"
      borderRadius="10px"
      height={window.innerHeight - 205}
      onScroll={onScroll}
      ref={scrollRef}
    >
      {/* 自治体の人にとっては募集履歴, 参加者にとっては参加履歴 */}
      <Link to="history">履歴</Link>
      <Link to="profile">プロフィール編集</Link>

      <Box bg="secondary.card" rounded="lg" p={5}>
        <Stack spacing={4} marginBottom="1rem">
          <Flex>
            <FormLabel marginBottom="1rem" htmlFor="name">
              自治会 太郎
            </FormLabel>
            <Spacer />
            <Button colorScheme="blue">
              <Icon as={FaEdit} olor="secondary.inputHelper" m={1} />
              プロフィールを編集
            </Button>
          </Flex>
        </Stack>
      </Box>

      <Stack spacing={0} marginTop="2rem" marginBottom="1rem">
        <Heading as="h4" size="md">
          お助け予定
        </Heading>
        <Text color="gray.500" fontSize="md">
          参加登録済みのイベント
        </Text>
        <Tasks tasks={tasks().filter((task) => task.id < 3)} />
      </Stack>
    </Box>
  );
}
