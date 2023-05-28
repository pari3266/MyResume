import React from "react";
import {
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={2} color={"#3533cd"}>
        تحصیلات
      </Heading>
      <UnorderedList>
        <ListItem>
          <Text fontWeight="bold">کارشناسی مهندسی کامپیوتر ،نرم افزار</Text>
          <Text>دانشگاه زنجان, تیر 99 – مهر 94</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Education;
