// 依頼作成（・確認）　'/post'にアクセスしたときに表示されるページ

import { useForm } from "react-hook-form";
import { FormErrorMessage, Box, FormControl, FormLabel, Input, Button, Heading, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Post() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const { scrollRef, onScroll, scrollToBottom, isOnBottom, unviewedMessageCount } = useAppContext();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  console.log("errors", errors);
  const onSubmit = () => {
    console.log("hello!");
  };
  const pattern = /^[0-9]+$/;

  return (
    <Box bg="white" p="5" overflow="auto" borderRadius="10px" height={height} onScroll={onScroll} ref={scrollRef}>
      <Heading>依頼作成</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title}>
          <FormLabel htmlFor="title">タイトル</FormLabel>
          <Input
            id="title"
            {...register("title", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.image}>
          <FormLabel htmlFor="image">画像</FormLabel>
          <Input
            id="image"
            {...register("image", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.author}>
          <FormLabel htmlFor="author">作成者</FormLabel>
          <Input
            id="author"
            {...register("author", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.author && errors.author.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.reward}>
          <FormLabel htmlFor="reward">報酬</FormLabel>
          <Input
            id="reward"
            {...register("reward", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.reward && errors.reward.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.recruitNum}>
          <FormLabel htmlFor="recruitNum">募集人数</FormLabel>
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
        <FormControl isInvalid={errors.desc}>
          <FormLabel htmlFor="desc">募集の説明</FormLabel>
          <Input
            id="desc"
            {...register("desc", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.desc && errors.desc.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phoneNumber}>
          <FormLabel htmlFor="phoneNumber">緊急連絡先</FormLabel>
          <Input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "必須項目です",
            })}
          />
          <FormErrorMessage>{errors.phoneNumber && errors.desc.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.tag}>
          <FormLabel htmlFor="tag">タグ</FormLabel>
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
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          保存する
        </Button>
      </form>
    </Box>
  );
}
