import { Flex, Text, Card, Heading } from "@chakra-ui/react";
import Youtube from "../components/Youtube";
import Calculadora from "../components/Calculadora";
import TabelaComparaJuros from "../components/TabelaComparaJuros";


const Index = () => {
  return (
    <Flex flexDir="column" alignItems={"center"} my={20} w="100%">
      <Calculadora />
      <Flex flexDir="column" m={3} alignItems="center">
        <Flex
          p={4}
          flexDir="column"
          alignItems="center"
          maxW="1000px"
          border="1px solid"
          borderColor="borderColor"
          borderRadius={8}
          boxShadow="dark-lg"
        >
          <Heading fontSize="2xl">Fórmula do juros composto</Heading>
          <Card variant="filled" my={2} py={4} px={6}>
            <Text fontSize="2xl">
              M = C (1 + i)<sup>t</sup>{" "}
            </Text>
          </Card>
          <Text my={4} width="100%" fontSize="xl">
            Mas afinal, o que são essas letras?
          </Text>
          <Text my={4}>
            <strong>Capital (C):</strong> é o primeiro valor investido.
            Conhecemos como capital o valor inicial da negociação, ou seja, ele
            é o valor de referência para calcularmos os juros com o passar do
            tempo.
          </Text>
          <Text my={4}>
            <strong>Juros (J):</strong> é o valor de compensação para o
            rendimento. Quando uma instituição financeira faz um empréstimo, ela
            empresta com o intuito de receber uma porcentagem a mais sobre o seu
            capital emprestado, logo, é acordada uma taxa de juros entre as
            partes.
          </Text>
          <Text my={4}>
            <strong>Taxa de juros (i):</strong> é a porcentagem acordada em cima
            do capital a cada instante. Essa taxa pode ser ao dia (a.d.), ao mês
            (a.m.), ao bimestre (a.b.) ou ao ano (a.a.). A taxa de juros é uma
            porcentagem geralmente representada na forma percentual, porém, para
            calcular-se o juros composto, é importante escrevê-la sempre na
            forma DECIMAL. (10% = 10/100 = 0,1)
          </Text>
          <Text my={4}>
            <strong>Tempo (t):</strong> é o tempo em que o capital ficará
            aplicado. É importante que a taxa de juros (i) e o tempo (t) estejam
            sempre na mesma unidade de medida, por exemplo, se a taxa definida
            foi de 10% a.a. então o tempo usado para o calculo também precisa
            estar em anos.
          </Text>
          <Text my={4}>
            <strong>Montante (M):</strong> é o valor final da transação. O
            montante é calculado pela soma do capital com os juros ➟ M = C + J.
            (Montante = Capital + Juros)
          </Text>

          <Heading fontSize="2xl">
            Qual a diferença entre juros compostos e simples?
          </Heading>
          <Text my={4}>
            A principal diferença entre eles é que o juros simples são
            calculados sempre em cima do capital investido não independente da
            sua taxa e do seu tempo, enquanto isso, o juros compostos são
            calculados sobre o capital investido e também os juros. Veja abaixo
            a diferença no resultado dos dois calculos aplicando em ambos um
            valor inicial de R$10.000,00 com uma taxa fixa de 10% a.a. durante 5
            anos.
          </Text>
          <TabelaComparaJuros />
          <Youtube link="rq8ZUdRVDAM" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
