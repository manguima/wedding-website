import { fontHailey, fontItaliana } from "@/app/layout";
import { noiseBg } from "@/utils/noise";
import { Box, Button, Center, Container, Flex, Text } from "@mantine/core";

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
          zIndex: 1,
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
          zIndex: 1,

          left: 0,
          position: "absolute",
          backgroundBlendMode: "multiply",
          backgroundImage: `url(${noiseBg})`,
          background: "#001406",
        }}
      ></Box>
      <Flex
        w={"100%"}
        h={"100%"}
        style={{ position: "absolute", left: 0, top: 0, zIndex: 4 }}
      >
        <Center w={"100%"} pt={"20rem"}>
          <Flex justify={"center"}>
            <Flex
              align={"center"}
              direction={"column"}
              style={{ position: "relative" }}
              gap={"6rem"}
            >
              <Flex
                left={"110%"}
                top={0}
                gap={"1rem"}
                direction={"column"}
                style={{ position: "absolute" }}
              >
                <Flex align={"center"} justify={"center"} gap={"0.5rem"}>
                  <Box
                    w={"5rem"}
                    h={"5rem"}
                    style={{
                      border: "0.2rem solid #fff",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <Center>
                      <Text
                        fz={"3rem"}
                        style={{ color: "#fff", fontWeight: 400 }}
                      >
                        16
                      </Text>
                    </Center>
                  </Box>
                  <Text
                    w={"1rem"}
                    style={{ color: "#fff" }}
                    tt={"uppercase"}
                    fz={"1.2rem"}
                  >
                    Dia
                  </Text>
                </Flex>
                <Flex align={"center"} justify={"center"} gap={"0.5rem"}>
                  <Box
                    w={"5rem"}
                    h={"5rem"}
                    style={{
                      border: "0.2rem solid #fff",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <Center>
                      <Text
                        fz={"3rem"}
                        style={{ color: "#fff", fontWeight: 400 }}
                      >
                        10
                      </Text>
                    </Center>
                  </Box>
                  <Text
                    w={"1rem"}
                    style={{ color: "#fff" }}
                    tt={"uppercase"}
                    fz={"1.2rem"}
                  >
                    Mês
                  </Text>
                </Flex>
                <Flex align={"center"} justify={"center"} gap={"0.5rem"}>
                  <Box
                    w={"5rem"}
                    h={"5rem"}
                    style={{
                      border: "0.2rem solid #fff",
                      borderRadius: "0.4rem",
                    }}
                  >
                    <Center>
                      <Text
                        fz={"3rem"}
                        style={{ color: "#fff", fontWeight: 400 }}
                      >
                        24
                      </Text>
                    </Center>
                  </Box>
                  <Text
                    w={"1rem"}
                    style={{ color: "#fff" }}
                    tt={"uppercase"}
                    fz={"1.2rem"}
                  >
                    Ano
                  </Text>
                </Flex>
              </Flex>
              <Flex align={"center"} direction={"column"}>
                <Text
                  ff={fontItaliana.style.fontFamily}
                  tt={"uppercase"}
                  fw={400}
                  lh={"1.5rem"}
                  fz={"7vw"}
                  style={{ color: "#f5f5f5" }}
                >
                  Salve
                </Text>
                <Text
                  ff={fontHailey.style.fontFamily}
                  fw={400}
                  lh={"11vw"}
                  fz={"10vw"}
                  style={{ color: "#E5C74D" }}
                >
                  esta
                </Text>
                <Text
                  ff={fontItaliana.style.fontFamily}
                  tt={"uppercase"}
                  fw={400}
                  lh={"0"}
                  fz={"7vw"}
                  style={{ color: "#f5f5f5" }}
                >
                  Data
                </Text>
              </Flex>
              <Button
                variant="outline"
                radius={"2rem"}
                style={{ borderColor: "#E5C74D", color: "#E5C74D" }}
              >
                Confirmar Presença
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </Container>
  );
};
