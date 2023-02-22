// マイページ　'my-page'にアクセスしたときに表示されるページ

import React from "react";

import {
  Container,
  Box,
  Text,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  FormLabel,
  Checkbox,
  Button,
  Divider,
  FormControl,
  Heading,
  ButtonGroup,
  Flex,
  Spacer,
  // Card
  // CardHeader, CardBody, CardFooter
} from "@chakra-ui/react";

import { FaRegEnvelope, FaLock, FaRegUser, FaEdit } from "react-icons/fa";

export default function MyPage() {
  return (
    <Container maxW="container.sm">
      <form>
        <Box bg="secondary.card" rounded="lg" p={5}>
          <Stack spacing={4} marginBottom="1rem">
            <Flex>
              <FormLabel marginBottom="1rem" htmlFor="name">
                {/* User.name */}
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
        </Stack>

        <Box bg="secondary.card" rounded="lg" p={5}>
          {/* <Card align="center">
            <CardHeader>
              <Heading size="md"> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card> */}
          <Stack marginBottom="1rem">
            <div class="event_list vevent">
              <Flex>
                <div class="event_schedule_area">
                  <p class="year">2023</p>
                  <p class="date">02/11</p>
                  （土）
                  <span class="dtstart">
                    <span
                      class="value-title"
                      title="2023-02-11T00:30:00Z"
                    ></span>
                  </span>
                  <span class="dtend">
                    <span
                      class="value-title"
                      title="2023-03-11T07:00:00Z"
                    ></span>
                  </span>
                </div>
                <Spacer />
                <div class="event_detail_area clearfix">
                  <div class="event_label_area">
                    <p class="time">09:30〜</p>

                    <p class="label_status_tag join">申込済</p>
                  </div>
                </div>
                <Spacer />
                <div class="event_inner">
                  <p class="event_thumbnail">
                    <a
                      class="image_link"
                      href="https://connpass.com/event/268772/"
                    >
                      <img
                        class="photo"
                        src="https://connpass-tokyo.s3.amazonaws.com/thumbs/15/a7/15a7fb447283c97e1fad0f902c45fd8c.png"
                        width="108"
                        height="72"
                        alt="Tokyo OSS Party!!"
                      />
                    </a>
                    <span class="label_status_event open">開催中</span>
                  </p>
                </div>
                <Spacer />
                <div>
                  <p class="event_title">
                    <a
                      class="url summary"
                      href="https://connpass.com/event/268772/"
                    >
                      Tokyo OSS Party!!
                    </a>
                  </p>

                  <p class="event_owner">
                    <span class="icon_owner">
                      <a class="image_link" href="/user/TokyoOSSparty/">
                        <img
                          src="https://connpass-tokyo.s3.amazonaws.com/thumbs/06/70/0670e7c575b414e4ae35ed39a3b909d3.png"
                          width="16"
                          height="16"
                          title="官民共創デジタルプラットフォーム創出事業事務局"
                          alt="官民共創デジタルプラットフォーム創出事業事務局"
                        />
                        官民共創デジタルプラットフォーム創出事業事務局
                      </a>
                    </span>
                  </p>
                </div>

                <div>
                  <p class="event_place location">
                    <span class="icon_place">参加予定人数</span>
                  </p>

                  <p class="event_participants">
                    <span class="amount">
                      <span>48</span>/70
                    </span>
                    人
                  </p>
                </div>
              </Flex>
              <Flex m={3}>
                <div class="event_schedule_area">
                  <p class="year">2023</p>
                  <p class="date">02/11</p>
                  （土）
                  <span class="dtstart">
                    <span
                      class="value-title"
                      title="2023-02-11T00:30:00Z"
                    ></span>
                  </span>
                  <span class="dtend">
                    <span
                      class="value-title"
                      title="2023-03-11T07:00:00Z"
                    ></span>
                  </span>
                </div>
                <Spacer />
                <div class="event_detail_area clearfix">
                  <div class="event_label_area">
                    <p class="time">09:30〜</p>

                    <p class="label_status_tag join">申込済</p>
                  </div>
                </div>
                <Spacer />
                <div class="event_inner">
                  <p class="event_thumbnail">
                    <a
                      class="image_link"
                      href="https://connpass.com/event/268772/"
                    >
                      <img
                        class="photo"
                        src="https://connpass-tokyo.s3.amazonaws.com/thumbs/15/a7/15a7fb447283c97e1fad0f902c45fd8c.png"
                        width="108"
                        height="72"
                        alt="Tokyo OSS Party!!"
                      />
                    </a>
                    <span class="label_status_event open">開催中</span>
                  </p>
                </div>
                <Spacer />
                <div>
                  <p class="event_title">
                    <a
                      class="url summary"
                      href="https://connpass.com/event/268772/"
                    >
                      Tokyo OSS Party!!
                    </a>
                  </p>

                  <p class="event_owner">
                    <span class="icon_owner">
                      <a class="image_link" href="/user/TokyoOSSparty/">
                        <img
                          src="https://connpass-tokyo.s3.amazonaws.com/thumbs/06/70/0670e7c575b414e4ae35ed39a3b909d3.png"
                          width="16"
                          height="16"
                          title="官民共創デジタルプラットフォーム創出事業事務局"
                          alt="官民共創デジタルプラットフォーム創出事業事務局"
                        />
                        官民共創デジタルプラットフォーム創出事業事務局
                      </a>
                    </span>
                  </p>
                </div>

                <div>
                  <p class="event_place location">
                    <span class="icon_place">参加予定人数</span>
                  </p>

                  <p class="event_participants">
                    <span class="amount">
                      <span>48</span>/70
                    </span>
                    人
                  </p>
                </div>
              </Flex>
            </div>
          </Stack>
        </Box>
      </form>

      {/* <Divider marginTop="2rem" marginBottom="2rem" orientation="horizontal" />
      <Box bg="secondary.card" rounded="lg" p={5} marginBottom="2rem">
        <Stack spacing={0} marginBottom="1rem">
          <Heading as="h4" size="md">
            Danger zone
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Delete your account and data
          </Text>
        </Stack>
        <Stack spacing={4} marginBottom="1rem">
          <Button colorScheme="red" variant="outline">
            Delete your account
          </Button>
        </Stack>
      </Box> */}
    </Container>
  );
}
