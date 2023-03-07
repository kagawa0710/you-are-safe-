// 依頼作成（・確認）　'/post'にアクセスしたときに表示されるページ

import { useForm } from "react-hook-form";
import { FormErrorMessage, Box, FormControl, FormLabel, Input, Text, Button, Textarea, Select, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Post() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const { scrollRef, onScroll, scrollToBottom, isOnBottom, unviewedMessageCount } = useAppContext();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = () => {
    console.log("hello!");
  };
  const pattern = /^[0-9]+$/;
  const [image, setImage] = useState();
  const inputId = Math.random().toString(32).substring(2);
  const handleOnAddImage = (e) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };
  const handleOnRemoveImage = () => {
    setImage(null);
  };

  return (
    <Box bg="white" p="5" overflow="auto" borderRadius="10px" height={height} onScroll={onScroll} ref={scrollRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              タイトル
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Input
            id="title"
            {...register("title", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.image} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              画像
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>

          {!image && (
            <>
              <Button aria-label="delete image" onClick={() => document.querySelector('input[type="file"]').click()}>
                ここを押して登録してください
              </Button>
              <input id={inputId} type="file" accept="image/*,.png,.jpg,.jpeg,.gif" onChange={handleOnAddImage} style={{ display: "none" }} />
            </>
          )}

          {image && (
            <Flex direction="column">
              <img
                src={URL.createObjectURL(image)}
                style={{
                  width: "80%",
                }}
              />
              <Button
                marginTop={4}
                aria-label="delete image"
                onClick={handleOnRemoveImage}
                style={{
                  width: "20%",
                }}
              >
                削除
              </Button>
            </Flex>
          )}
          <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
        </FormControl>
        <FormControl marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              作成者
            </FormLabel>
          </Flex>
          <Input id="author" {...register("author")} />
        </FormControl>
        <FormControl isInvalid={errors.reward} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              報酬
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Input
            id="reward"
            {...register("reward", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.reward && errors.reward.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.recruitNum} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              募集人数
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Input
            id="recruitNum"
            {...register("recruitNum", {
              required: "必須項目です",
              pattern: {
                value: pattern,
                message: "数値をいれてください",
              },
            })}
          />
          <FormErrorMessage>{errors.recruitNum && errors.recruitNum.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.desc} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              募集の説明
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Textarea
            id="desc"
            {...register("desc", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.desc && errors.desc.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phoneNumber} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              緊急連絡先
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.phoneNumber && errors.desc.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.tag} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              タグ
            </FormLabel>
          </Flex>
          <Select
            placeholder="選択してください"
            id="tag"
            {...register("tag", {
              required: "必須項目です",
            })}
          >
            <option value="hoge">ほげ</option>
            <option value="fuga">ふが</option>
            <option value="piyo">ぴよ</option>
          </Select>
          <FormErrorMessage>{errors.tag && errors.tag.message}</FormErrorMessage>
        </FormControl>
        <Flex justifyContent="center" marginTop={8}>
          <Button mt={4} colorScheme="orange" width="200px" height="50px" isLoading={isSubmitting} type="submit">
            <Text fontSize="2xl">投稿する</Text>
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
