import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => (
  <Layout title="Trabalhos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Meus Trabalhos
      </Heading>
    </Container>
  </Layout>
);

export default Works;
