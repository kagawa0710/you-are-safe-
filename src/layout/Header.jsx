import { Grid } from "@chakra-ui/react";
import AssociationHeader from './AssociationHeader'
import ResidentHeader from './ResidentHeader'

export default function Header({isAssociation}) {
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
      { isAssociation ? (<AssociationHeader />) : (<ResidentHeader />) }
    </Grid>
  );
}
