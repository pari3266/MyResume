import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  SimpleGrid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "وب سایت مدیریت حمل و نقل ناوگان",
    description: "در مورد جابجایی ماشین ها و مدیریت ماشین ها با ردیاب ها و همچنین فروش ردیاب به مردم برای استفاده از وب سایت و ردیابی ماشین های شرکت خود بود. آنها می توانند ماشین های خود را به سیستم اضافه کنند و سوخت ها، ردیاب ها و کاربران را کنترل کنند. افزودن و کنترل مسیر ماشین ها را ببینید. همچنین آنها می توانند یک ماموریت یا یک شغل را تعریف کنند، یک ماموریت شامل مشاغلی است که در برنامه توضیح داده شده است",
    imageSrc: "/fms.png",
    link: "https://fms.arshinco.com/"
  },
  {
    id: 2,
    title: "وب سایت مدیریت خودروهای شخصی",
    description: "مدیریت خودروهای شخصی در مورد ردیابی خودروهای شخصی برای محافظت در برابر سارقان و ردیابی مسیر ماشین هست.کاربران می توانند دزدگیر ماشین را از راه دور کنترل کنند و مسیر ماشین ها را ببینید ",
    imageSrc: "/Angular.jpg",
    link: "https://foxen.arshinco.com/"
  },
  {
    id: 3,
    title: "وب سایت مدیریت fms admin",
    description: "مدیریت کنترل وسایل نقلیه و خرید دستگاه های ردیابی سیستم های مختلف",
    imageSrc: "/Angular.jpg",
  },
  {
    id: 4,
    title: "شبکه اجتماعی کتاب بهخوان",
    description: "یک شبکه اجتماعی کتاب برای افرادی که می خواهند کتاب هایی را که می خوانند و نظرات خود را در مورد آنها به اشتراک بگذارند.آنها می توانند از نظرات دیگر برای انتخاب کتاب استفاده کنند و می توانند چند کتاب را که می خواهند در یک سال بخوانند و غیره به اشتراک بگذارند.",
    imageSrc: "/beh.png",
    link: "https://behkhaan.ir/"
  },
  {
    id: 5,
    title: "وب سایت مدیریت بهخوان",
    description: "مدیریت ادمین در مورد مدیریت نظرات، کتاب ها، کاربران و همه چیزهایی که در پروژه بود",
    imageSrc: "/Angular.jpg",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const handleNext = () => {
    setActiveProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
  };

  const handlePrevious = () => {
    setActiveProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4} color={"#3533cd"}>
       پروژه ها
      </Heading>
      <Flex alignItems="center">
        <ChevronLeftIcon
          boxSize={8}
          cursor="pointer"
          onClick={handlePrevious}
        />
        <SimpleGrid columns={1} spacing={4} mt={4} mx="auto">
          <GridItem colSpan={1}>
            <Image
              src={projects[activeProject].imageSrc}
              alt={projects[activeProject].title}
              borderRadius="md"
              boxSize="300px"
              objectFit="cover"
              width={"800px"}
              mx="auto"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading as="h3" size="md">
              {projects[activeProject].title}
            </Heading>
            <Text mt={2}>{projects[activeProject].description}</Text>
            <Link href={projects[activeProject].link} isExternal color={"blue"}>link</Link>
          </GridItem>
        </SimpleGrid>
        <ChevronRightIcon boxSize={8} cursor="pointer" onClick={handleNext} />
      </Flex>
    </Box>
  );
}
