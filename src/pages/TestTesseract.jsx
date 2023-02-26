// 'test'にアクセスしたときに表示されるページ
// tesseractのテスト用

import { Box, Button, IconButton, Icon } from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/appContext";
import React, { useState } from "react";
import Tesseract, { createWorker } from "tesseract.js";
export default function TestTesseract() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const {
    scrollRef,
    onScroll,
    scrollToBottom,
    isOnBottom,
    unviewedMessageCount,
  } = useAppContext();

  const [file, setFile] = useState();
  const [textOcr, setTextOcr] = useState("");
  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const tryOcr = async () => {
    Tesseract.recognize(file, "eng+jpn", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      console.log(text);
      setTextOcr(text);
    });
    // await worker.terminate();
  };

  // fileData 取得
  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleClick = async () => {
    if (!file) return;
    setTextOcr("Recognizing...");
    await tryOcr();
  };

  return (
    <Box
      bg="white"
      p="5"
      pb="24"
      overflow="auto"
      borderRadius="10px"
      // height={height}
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div className="App">
        <AttachmentIcon />
        <input type="file" onChange={handleChange} />
        <br />
        <Button className="button" onClick={handleClick}>
          Try OCR
        </Button>
        <div>{textOcr}</div>
      </div>
    </Box>
  );
}
