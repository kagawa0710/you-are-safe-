import { Switch, Box, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Elderly from "./Elderly";
import Young from "./Young";

export default function List() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const {
    scrollRef,
    onScroll,
    scrollToBottom,
    isOnBottom,
    unviewedMessageCount,
  } = useAppContext();

  // resident(住民) or association(自治会)
  const [attribute, setAttribute] = useState('residents');
  function handleChange(e) {
    setAttribute(attribute === 'association' ? 'residents' : 'association')
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
    });
  }, []);

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
        {/* 本来はユーザー情報で識別したいが一旦。 */}
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
                自治体の人?
            </FormLabel>
            <Switch 
                id='association' 
                onChange={e => handleChange(e)}
            />
        </FormControl>
        {
          (attribute === 'association') && <Elderly/>
        }
        {
          (attribute === 'residents') && <Young/>
        }
      </Box>
  );
}
