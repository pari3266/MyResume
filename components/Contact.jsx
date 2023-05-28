import React from "react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={2} color={"#3533cd"}>
        ارتباط
      </Heading>
      <Text color={"blue"}>
        <Link href="https://www.linkedin.com/in/parisa-talebi/" isExternal>
          MY LINKEDIN <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="mailto:parisatalebi25@gmail.com" isExternal>
          MY EMAIL <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://github.com/pari3266" isExternal>
          MY GITHUB <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </Box>
  );
};

export default Contact;