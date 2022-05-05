import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article.js";
import Section from "../components/section";
import { GridItem } from "../components/grid-item.js";

const Posts = () => (
  <Layout title="Postagens">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts Populares
      </Heading>
    </Container>
  </Layout>
);

export default Posts;
