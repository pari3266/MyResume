import React from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Card
      style={{
        margin: "0 auto",
        direction: "rtl",
        marginBottom: "30px",
        background: "linear-gradient(#8c52ff, #5ce1e6)",
      }}
    >
      <CardHeader>
        <Heading size="md" color={"#3533cd"}>
          درباره من
        </Heading>
      </CardHeader>

      <CardBody>
        <Text pt="2" fontSize="md">
          بنده برنامه نویس فرانت اند با حدود سه سال سابقه کار هستم که بیشتر با
          فریم ورک انگولار کار کردم و علاقمند به یادگیری و روبرو شدن با چالش های
          جدید هستم و درحال حاضر روی پروژه های شخصی تمرین و فعالیت میکنم و مایل
          به همکاری به صورت دورکاری در زمینه فرانت اند هستم.
        </Text>
      </CardBody>
    </Card>
  );
};

export default AboutMe;
