// 一覧ページ　'detail/{id}'にアクセスしたときに表示されるページ

import {Box, Button, Center, Divider, Flex, Heading, HStack, Image, Tag, Text} from "@chakra-ui/react";
import {useAppContext} from "../context/appContext";
import {iconSrc} from "../libs/icons"
import tasks from "../../data/tasks";
import {useParams, useHistory} from 'react-router-dom';
import {toMonthAndDayJP} from "../libs/date";
import mapImage from '../images/map.png'

const Detail = () => {
  const {
    scrollRef,
    onScroll,
  } = useAppContext();
  const {id} = useParams();
  const history = useHistory();
  const task = tasks().filter(t => t.id === Number(id))[0];

  return (
      <Box
          bg="white"
          p="5"
          pb="48"
          overflow="auto"
          borderRadius="10px"
          onScroll={onScroll}
          ref={scrollRef}
      >

        <Heading size="lg" mb="2">{task.title}</Heading>
        <HStack spacing={2}>
          {task.tags.map((tag) => (
              <Tag size="sm" key={tag}>
                {`#${tag}`}
              </Tag>
          ))}
        </HStack>
        <Flex mt={2}>
          <Center minW='44px'>
            <img src={iconSrc(task.iconId)}/>
          </Center>
          <Box ml="8">
            <Text mb="2">開催日:{toMonthAndDayJP(task.startAt)}</Text>
            <Text mb="2">場所:{task.address}</Text>
            <Text mb="2">報酬:￥{task.reward}</Text>
            <Text mb="2">募集人数:{task.recruitNum}</Text>
          </Box>
        </Flex>
        <Divider my="4"/>
        <Text mb="4">{task.desc}</Text>
        <Image src={mapImage} alt="東京都文京区音羽2-12-21" objectFit="cover" height="300px"/>

        <Box position="fixed" bottom="20" left="0" width="100%" padding="4">
          <Button onClick={() => history.push('/my-page/')} width="100%" size="lg" colorScheme="blue">
            参加する
          </Button>
          <Center bg="gray.200" mt="2">緊急連絡先:{task.phoneNumber}</Center>
        </Box>
      </Box>
  );
}

export default Detail;
