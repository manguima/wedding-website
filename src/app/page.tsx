import { Container, Flex } from "@mantine/core";
import { fontHailey, fontItaliana } from "./layout";
import { HeaderMenu } from "@/components/layout/HeaderMenu";
import { HeaderSection } from "@/components/HomePage/HeaderSection";

export default function Home() {
  return (
    <Container fluid p={0}>
      <HeaderSection />
    </Container>
  );
}
