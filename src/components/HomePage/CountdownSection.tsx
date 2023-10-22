import { fontItaliana } from "@/app/layout";
import { Box, Center, Container, Divider, Flex, Text } from "@mantine/core";

export const CountdownSection = () => {
  return (
    <Container fluid h={"100vh"} style={{ background: "#E1F0D2" }} p={0}>
      <Center w={"100%"} h={"100%"}>
        <Flex
          maw={"1200px"}
          w={"100%"}
          gap={"4rem"}
          direction={"column"}
          justify={"center"}
          align={"center"}
        >
          <Flex direction={"column"}>
            <Divider
              my="xs"
              w={"100%"}
              color="#000000"
              styles={{
                label: { textTransform: "uppercase", fontSize: "1.2rem" },
              }}
              label="Contagem"
              labelPosition="center"
            />
            <Text fz={"4rem"} ff={fontItaliana.style.fontFamily}>
              Caminho para o "Sim"
            </Text>
          </Flex>

          <Flex gap={"6rem"}>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              style={{ position: "relative" }}
            >
              <Box
                w={"10rem"}
                h={"10rem"}
                style={{
                  border: "0.2rem solid #000000",
                  borderRadius: "0.5rem",
                  rotate: "45deg",
                }}
              ></Box>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ position: "absolute" }}
              >
                <Text ta={"center"} fz={"4rem"} fw={300} lh={"4rem"}>
                  12
                </Text>
                <Text ta={"center"} fw={600} fz={"1.2rem"} tt={"uppercase"}>
                  Meses
                </Text>
              </Flex>
            </Flex>

            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              style={{ position: "relative" }}
            >
              <Box
                w={"10rem"}
                h={"10rem"}
                style={{
                  border: "0.2rem solid #000000",
                  borderRadius: "0.5rem",
                  rotate: "45deg",
                }}
              ></Box>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ position: "absolute" }}
              >
                <Text ta={"center"} fz={"4rem"} fw={300} lh={"4rem"}>
                  12
                </Text>
                <Text ta={"center"} fw={600} fz={"1.2rem"} tt={"uppercase"}>
                  Dias
                </Text>
              </Flex>
            </Flex>

            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              style={{ position: "relative" }}
            >
              <Box
                w={"10rem"}
                h={"10rem"}
                style={{
                  border: "0.2rem solid #000000",
                  borderRadius: "0.5rem",
                  rotate: "45deg",
                }}
              ></Box>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ position: "absolute" }}
              >
                <Text ta={"center"} fz={"4rem"} fw={300} lh={"4rem"}>
                  12
                </Text>
                <Text ta={"center"} fw={600} fz={"1.2rem"} tt={"uppercase"}>
                  Horas
                </Text>
              </Flex>
            </Flex>

            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              style={{ position: "relative" }}
            >
              <Box
                w={"10rem"}
                h={"10rem"}
                style={{
                  border: "0.2rem solid #000000",
                  borderRadius: "0.5rem",
                  rotate: "45deg",
                }}
              ></Box>
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                style={{ position: "absolute" }}
              >
                <Text ta={"center"} fz={"4rem"} fw={300} lh={"4rem"}>
                  12
                </Text>
                <Text ta={"center"} fw={600} fz={"1.2rem"} tt={"uppercase"}>
                  Minutos
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
};
