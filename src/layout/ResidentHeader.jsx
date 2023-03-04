import { GridItem, Image, Link } from "@chakra-ui/react";

export default function ResidentHeader() {
  return (
    <>
      <GridItem justifySelf="start" ml="4" my="3">
        <Link href='/'>
          <Image src="/service-name.png" height="30px" />
        </Link>
      </GridItem>
      <GridItem justifySelf="end" mr="4" my="3">
        <Link href='/my-page'>
          <Image src="/sample-user.png" height="30px" />
        </Link>
      </GridItem>
    </>
  );
}
