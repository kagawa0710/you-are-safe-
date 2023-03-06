import {
  Flex,
  Box,
  Link,
  Text,
  Button,
  SimpleGrid
} from "@chakra-ui/react";
import { Modal } from '../components/commons/'

export default function Home() {
  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        <Box mt={4} mx={4}>
          <Modal
            buttonTitle='自治体/町会の情報更新'
            secondaryButtonTitle='保存'
            backButtonTitle='戻る'
            modalTitle='情報更新'
            modalBody='comming soon!'
          />
          <Link href={`/post`}>
            <Button colorScheme="orange" width="full" height="150px" mt={4}>
              <Text fontSize="5xl">募集作成</Text>
            </Button>
          </Link>
          <Button colorScheme="teal" width="full" height="150px" mt={4}>
            <Link href={`/created-tasks`}>
              <Flex direction="column">
                <Text fontSize="5xl">作成した</Text>
                <Text fontSize="5xl">募集一覧</Text>
              </Flex>
            </Link>
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}
