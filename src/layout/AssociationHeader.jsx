import { GridItem, Image, Link } from "@chakra-ui/react";

export default function AssociationHeader() {
  return (
    <>
      <GridItem justifySelf="start" ml="4" my="3">
        <Link href='/home'>
          <Image src="/service-name.png" height="40px" />
        </Link>
      </GridItem>
    </>
  );
}
