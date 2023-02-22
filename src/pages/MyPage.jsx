// マイページ　'my-page'にアクセスしたときに表示されるページ

import { Switch, Box, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";

export default function MyPage() {
  const { scrollRef, onScroll, scrollToBottom, isOnBottom, unviewedMessageCount } = useAppContext();

  return (
    <Box bg="white" p="5" overflow="auto" borderRadius="10px" height={window.innerHeight - 205} onScroll={onScroll} ref={scrollRef}>
      {/* 自治体の人にとっては募集履歴, 参加者にとっては参加履歴 */}
      <Link to="history">履歴</Link>
      <Link to="profile">プロフィール編集</Link>
    </Box>
  );
}
