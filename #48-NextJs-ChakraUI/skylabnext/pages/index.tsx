// import Head from 'next/head'

import { Grid, Flex, Heading, Link, Button, Text } from "@chakra-ui/core";

import Divider from "../components/Divider";
import Input from "../components/Input";

export default function Home() {
  /*Onde não tem nada na interface utiliza "ponto".*/
  /*flex-start -> Mais a esquerda possível.*/
  /*Não são 16px no "marginTop". 16 = 4rem = 64px.*/
  /*alignItems="stretch" -> Ocupar o máximo de largura possível.*/
  /*flex="1" -> Ocupar o máximo de largura possível.*/
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" align="flex-start" >
        <img src="/rocketseat.svg" alt="Rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16} >
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          placeholder="E-mail"
        />

        <Input
          placeholder="Senha"
          marginTop={2}
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: "purple.500" }}
        >
          Esqueci minha senha
        </Link>

        <Button
          height="50px"
          backgroundColor="purple.500"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: "purple.600" }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: "purple.500" }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
