// 一覧ページ　'detail/{id}'にアクセスしたときに表示されるページ

import {
    Badge,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Divider, Flex,
    Heading, Tag,
    Text,
    Image, HStack, Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Detail() {
  const [height, setHeight] = useState(window.innerHeight - 205);
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
        // height={height}
        onScroll={onScroll}
        ref={scrollRef}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>List</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Detail</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7br1bzBVg6pxikOK5YVMZA4zHcez6RXXWyg&usqp=CAU" alt="防災訓練" objectFit="cover" height="300px" />
        <Box p="4">
          <Heading size="lg" mb="2">消防訓練のサポーター募集</Heading>
          <HStack spacing={2}>
            {['防災', 'サポータ募集', '昼間'].map((tag) => (
                <Tag size="sm" key={tag}>
                    {tag}
                </Tag>
            ))}
          </HStack>
          <Flex align="center" mb="4" mt={4}>
            <Badge colorScheme="green" mr="2">練馬区 小竹町会</Badge>
            <Text fontSize="sm">作成日: 2022/2/25</Text>
          </Flex>
          <Text mb="4">説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります説明が入ります。</Text>
          <Divider my="4" />
          <Box>
            <Heading size="md" mb="2">詳細情報</Heading>
            <Box>
              <Text mb="2"><strong>集合場所:</strong>旭丘中学校</Text>
              <Text mb="2"><strong>報酬:</strong>1000円</Text>
              <Text mb="2"><strong>募集人数:</strong>5人</Text>
              <Text mb="2"><strong>開催日:</strong>11月29日
                9：00～10：00 </Text>
              <Text mb="2"><strong>緊急連絡先:</strong> 080-0000-0000</Text>
            </Box>
          </Box>
        <Box>
      </Box>
    </Box>
          <Box position="fixed" bottom="0" left="0" width="100%" padding="4">
              <Button onClick={() => console.log('参加する')} width="100%" size="lg" colorScheme="blue">
                  参加する
              </Button>
          </Box>
  </Box>
  );
}
