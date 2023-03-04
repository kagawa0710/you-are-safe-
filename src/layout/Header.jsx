import { Grid, GridItem, Image, Link } from "@chakra-ui/react";

export default function Header({isAssociation}) {
  const myPagePath = '/my-page'
  const topPath = '/'

  return (
    <Grid
      templateColumns="max-content 1fr min-content"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="4px solid #edf2f7"
    >
      <GridItem justifySelf="start" ml="4" my="3">
        <Link href={topPath}>
          <Image src="/service-name.png" height="30px" />
        </Link>
      </GridItem>
      { !isAssociation &&
        <GridItem justifySelf="end" mr="4" my="3">
          <Link href={myPagePath}>
            <Image src="/sample-user.png" height="30px" />
          </Link>
        </GridItem>
      }
    </Grid>
  );
}
