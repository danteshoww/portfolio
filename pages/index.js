import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Olá, Eu sou um desenvolvedor brasileiro!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arnon Farias
          </Heading>
          <p>Designer, Editor de Vídeos e Desenvolvedor</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/EU2.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Trabalho
        </Heading>
        <Paragraph>
          Arnon é um freelancer e um desenvolvedor situado em Santarém com uma
          paixão em realizar serviços digitais. Seu principal foco é desenvolver
          aplicações que resolvam o problema do cotidiano através da
          programação. Quando não está online, ele adora passar o seu tempo
          livre com amigos seja jogando ou passeando. Atualmente ele está em um
          projeto chamado{" "}
          <NextLink href="/works/todoapp" scroll={false}>
            <Link>Lista de Tarefas</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Biografia
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Nasceu em Santarém, Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completou o Ensino Médio no colégio Alvaro Adolfo da Silveira e entrou
          na Faculdade Universidade Federal do Oeste do Pará(UFOPA) no curso de
          Ciência da Computação.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Trabalhou em Gota Publicidade
        </BioSection>
        <BioSection>
          <BioYear>2021 até o presente</BioYear>
          Trabalha como freelancer enquanto exerce suas funções como Discente na
          UFOPA.
        </BioSection>
      </Section>

      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Eu ♥
        </Heading>
        <Paragraph>Música, Jogos e Programação</Paragraph>
      </Section>

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          Minhas redes sociais
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/devdanteshow" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @devdanteshow
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/devdanteshow" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @devdanteshow
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/dantevlr/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @dantevlr
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posts Populares
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
