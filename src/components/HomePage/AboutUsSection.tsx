import { fontHailey, fontItaliana, fontRoboto } from "@/app/layout";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@mantine/core";

export const AboutUsSection = () => {
  return (
    <Container p={0} fluid h={"100vh"}>
      <Center h={"100%"}>
        <Flex
          w={"1200px"}
          gap={"2rem"}
          wrap={"nowrap"}
          justify={"center"}
          align={"center"}
        >
          <Box w={"45%"}>
            <AspectRatio ratio={10 / 12}>
              <Image
                style={{
                  borderRadius: "20rem 20rem 1rem 1rem",
                  overflow: "hidden",
                  zIndex: 2,
                }}
                fit="cover"
                width={"100%"}
                h={"100%"}
                src={"images/img_aboutus_section.png"}
              />
              <Box
                w={"100%"}
                h={"100%"}
                style={{
                  borderRadius: "20rem 20rem 1rem 1rem",
                  overflow: "hidden",
                  background: "#E1E1E1",
                  position: "absolute",
                  left: "-1rem",
                  top: "1rem",
                }}
              ></Box>
            </AspectRatio>
          </Box>
          <Flex gap={"1rem"} w={"60%"} direction={"column"}>
            <Text fz={"3em"} ff={fontItaliana.style.fontFamily}>
              Um pouco sobre nós
            </Text>
            <Text fz={"1.2rem"} fw={400} color="#626262">
              Nos apaixonamos um pelo outro, cativados pela paciência e bondade,
              reconhecendo que Deus é o centro desse amor. Ao longo dos anos,
              enfrentamos desafios, pedimos desculpas quando necessário,
              crescemos juntos, mantivemos a fé um no outro e em Deus,
              aguardamos momentos especiais e superamos obstáculos juntos.
              Acreditamos que esse amor, ancorado em nossa fé e comprometimento,
              é eterno, destinado a durar para sempre. Nos alegramos em poder
              dizer que estamos em direção ao altar, em busca de eternizar esse
              amor. Assim não sendo dois, mas uma só carne e desejamos que...
            </Text>
            <Text fz={"3rem"} ff={fontHailey.style.fontFamily}>
              “Vejam, saibam, considerem e compreendam que a mão do Senhor fez
              isso.”{" "}
              <b
                style={{
                  fontFamily: fontRoboto.style.fontFamily,
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: "#00000030",
                }}
              >
                (IS 41:20)
              </b>
            </Text>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
};
