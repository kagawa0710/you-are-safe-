// 依頼作成（・確認）　'/post'にアクセスしたときに表示されるページ

import { useForm } from "react-hook-form";
import { FormErrorMessage, Box, FormControl, FormLabel, Input, Text, Button, Textarea, Select, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Post() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const { scrollRef, onScroll } = useAppContext();
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
  const handleOnAddImage = (e) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };
  const handleOnRemoveImage = () => {
    setImage(null);
  };

  const months = [
    { value: "01", label: "1" },
    { value: "02", label: "2" },
    { value: "03", label: "3" },
    { value: "04", label: "4" },
    { value: "05", label: "5" },
    { value: "06", label: "6" },
    { value: "07", label: "7" },
    { value: "08", label: "8" },
    { value: "09", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, "0"),
    label: (i + 1).toString(),
  }));

  const hours = Array.from({ length: 24 }, (_, i) => ({
    value: i.toString().padStart(2, "0"),
    label: i.toString(),
  }));

  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i.toString().padStart(2, "0"),
    label: i.toString(),
  }));

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

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
        <FormControl isInvalid={errors.date} marginTop={8}>
          <Flex>
            <FormLabel htmlFor="date" fontSize="2xl" fontWeight="bold">
              日時
            </FormLabel>
            <Text color="red" fontSize="2xl">
              ＊必須
            </Text>
          </Flex>
          <Flex align="start" justify="center" direction="column">
            <Flex>
              <Flex p="2" align="center" justify="center">
                <Select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  {...register("month", {
                    required: "必須項目です",
                  })}
                >
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </Select>
                <Text marginLeft={2} fontSize="xl">
                  月
                </Text>
              </Flex>
              <Flex p="2" align="center" justify="center">
                <Select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  {...register("day", {
                    required: "必須項目です",
                  })}
                >
                  {days.map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}
                    </option>
                  ))}
                </Select>
                <Text marginLeft={2} fontSize="xl">
                  日
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex p="2" align="center" justify="center">
                <Select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                  {...register("hour", {
                    required: "必須項目です",
                  })}
                >
                  {hours.map((hour) => (
                    <option key={hour.value} value={hour.value}>
                      {hour.label}
                    </option>
                  ))}
                </Select>
                <Text marginLeft={2} fontSize="xl">
                  時
                </Text>
              </Flex>
              <Flex p="2" align="center" justify="center">
                <Select
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(e.target.value)}
                  {...register("minute", {
                    required: "必須項目です",
                  })}
                >
                  {minutes.map((minute) => (
                    <option key={minute.value} value={minute.value}>
                      {minute.label}
                    </option>
                  ))}
                </Select>
                <Text marginLeft={2} fontSize="xl">
                  分
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <FormErrorMessage>{(errors.month || errors.day || errors.hour || errors.minute) && "必須項目です"}</FormErrorMessage>
        </FormControl>
        <FormControl marginTop={8}>
          <Flex>
            <FormLabel htmlFor="title" fontSize="2xl" fontWeight="bold">
              画像
            </FormLabel>
          </Flex>

          {!image && (
            <>
              <Button aria-label="delete image" onClick={() => document.querySelector('input[type="file"]').click()} width="100%" height="80px">
                <Text fontSize="xl">ここを押して登録してください</Text>
              </Button>
              <input id="image" type="file" accept="image/*,.png,.jpg,.jpeg,.gif" onChange={handleOnAddImage} style={{ display: "none" }} />
            </>
          )}

          {image && (
            <Flex direction="column">
              <img
                src={URL.createObjectURL(image)}
                style={{
                  width: "100%",
                }}
              />
              <Button
                marginTop={4}
                aria-label="delete image"
                onClick={handleOnRemoveImage}
                style={{
                  width: "100%",
                  height: "40px",
                }}
              >
                <Text fontSize="xl">削除</Text>
              </Button>
            </Flex>
          )}
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
