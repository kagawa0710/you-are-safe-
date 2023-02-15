// 一覧ページ　'detail/{id}'にアクセスしたときに表示されるページ

import { Switch, Box, FormControl, FormLabel } from "@chakra-ui/react";
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
        height={height}
        onScroll={onScroll}
        ref={scrollRef}
      >

        <div>詳細ページだよ</div>
      </Box>    
  );
}
