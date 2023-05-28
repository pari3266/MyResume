import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  Divider,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
const WorkExperience = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={2} color={"#3533cd"}>
        تجربه های کاری
      </Heading>
      <UnorderedList>
        <ListItem mb={8}>
          <Text fontWeight="bold">Self-employed - FrontEnd developer</Text>
          <Text> حال–مرداد 1401</Text>
          <Text>یادگیری و تمرین با پروژه های انگولار و ریکت</Text>
          <Text mt={8} color={"#5e17eb"}>
            nginx, react ,material ui , styled components, RxJs, NgRx(learning),
            Nextjs(learning)
          </Text>
        </ListItem>
        <Divider m={8}/>
        <ListItem mb={8}>
          <Text fontWeight="bold"> FrontEnd developer</Text>
          <Text>آرشین , تیر1401–فروردین 1400</Text>
          <div>
            <OrderedList>
              <ListItem>Fleet transportation management website</ListItem>
              <Link
                href="
https://fms.arshinco.com/"
                isExternal
                color={"blue"}
              >
                fms
              </Link>
              <ListItem>Personal car management website</ListItem>
              <Link
                href="
                https://foxen.arshinco.com/"
                isExternal
                color={"blue"}
              >
                foxen
              </Link>
              <ListItem>fms admin management website</ListItem>
            </OrderedList>
          </div>
        </ListItem>
        <Text color={"#5e17eb"}>
          Html, css , js , ts , angular 9,12 , Angular material, flex, pwa,
          google maps, google chart, restFul, web Socket, RxJs
        </Text>
        <Divider m={8}/>
        <ListItem mb={8} mt={8}>
          <Text fontWeight="bold"> Intern & FrontEnd developer</Text>
          <Text>بهخوان , اسفند99–تیر99</Text>
          <div>
            <OrderedList>
              <ListItem>Behkhaan (book social network)</ListItem>
              <Link
                href="
                https://behkhaan.ir/"
                isExternal
                color={"blue"}
              >
                behkhaan
              </Link>
              <ListItem>Admin management website of Behkhan </ListItem>
              <ListItem>Update the Barkat Foundation website</ListItem>
              <ListItem>Admin management website of Barkat Foundation</ListItem>
              <ListItem>
                Teaching front-end programming
                trainees(html,css,js,ts,angular12)
              </ListItem>
            </OrderedList>
          </div>
        </ListItem>
        <Text color={"#5e17eb"}>
          Html, css , bootstrap , flex, js , ts , angular 12, Angular material,
          restFul , lazy loading, a little rxjs(like subject, switchMap ,of)
        </Text>
      </UnorderedList>
    </Box>
  );
};

export default WorkExperience;
