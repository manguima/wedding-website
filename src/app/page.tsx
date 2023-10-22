import { Container, Flex } from "@mantine/core";
import { fontHailey, fontItaliana } from "./layout";
import { HeaderMenu } from "@/components/layout/HeaderMenu";
import { HeaderSection } from "@/components/HomePage/HeaderSection";
import { AboutUsSection } from "@/components/HomePage/AboutUsSection";
import { CountdownSection } from "@/components/HomePage/CountdownSection";

export default function Home() {
  return (
    <Container fluid p={0}>
      <HeaderSection />
      <AboutUsSection />
      <CountdownSection />
    </Container>
  );
}
