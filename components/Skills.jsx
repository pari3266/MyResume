import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={2} color={"#3533cd"}>
        مهارت ها
      </Heading>
      <Text color={"#5e17eb"}>
        Html , css , Js , Ts , angular 9+ Angular material Bootstrap , flex Pwa
        Web socket restFul , lazy loading, Google maps , google chart
        https://developers.google.com/maps Git
      </Text>
      <Text color={"#3533cd"}>مهارت های درحال یادگیری :</Text>

      <Text color={"#5e17eb"}>
        React material ui styled components RxJs NgRx Nextjs
      </Text>
    </Box>
  );
};

export default Skills;
