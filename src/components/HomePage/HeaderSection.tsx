import { noiseBg } from "@/utils/noise";
import { Box, Center, Container, Flex } from "@mantine/core";

export const HeaderSection = () => {
  return (
    <Container
      fluid
      w={"100%"}
      h={"100vh"}
      p={0}
      style={{
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          top: 0,
          left: 0,
          position: "absolute",
          backgroundImage: "url(images/img_header_section.png)",
        }}
      ></Box>
      <Box
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
          top: 0,
          left: 0,
          position: "absolute",
          backgroundBlendMode: "multiply",
          backgroundImage: `url(${noiseBg})`,
          background: "#001406",
        }}
      ></Box>
      <Flex>
        <Center></Center>
      </Flex>
    </Container>
  );
};
