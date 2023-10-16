import {
  ActionIcon,
  Container,
  Flex,
  Center,
  Button,
  Badge,
} from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";

export const HeaderMenu = () => {
  return (
    <Container
      w={"100%"}
      fluid
      style={{
        background:
          "linear-gradient(180deg, #0F1D14 0%, rgba(15, 29, 20, 0.00) 100%)",
        position: "fixed",
        zIndex: "10",
      }}
    >
      <Center>
        <Flex w={"100%"} p={"1.5rem"} maw={"1200px"} justify={"space-between"}>
          <Flex gap={"2rem"}>
            <img src="images/logo.svg" width={"100vw"}></img>
            <Flex gap={"1rem"}>
              <Button
                styles={{ label: {} }}
                fw={400}
                variant="transparent"
                color="white"
              >
                Início
              </Button>
              <Button fw={400} variant="transparent" color="white">
                Confirmar Presença
              </Button>{" "}
              <Button fw={400} variant="transparent" color="white">
                Sobre Nós
              </Button>{" "}
              <Button fw={400} variant="transparent" color="white">
                <Flex gap={"0.4rem"} align={"center"}>
                  Lista de Presentes{" "}
                  <Badge
                    color="#E5C74D"
                    radius={"0.2rem"}
                    style={{ color: "#54481A" }}
                  >
                    Em breve!
                  </Badge>
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <Flex>
            <ActionIcon size={"2rem"} variant="transparent" color="#fff">
              <IconShoppingBag />
            </ActionIcon>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
};
