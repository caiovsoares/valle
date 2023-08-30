import { Flex, Card, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

const TabelaComparaJuros = () => {
  return (
    <Flex
      flexDir={["column", "column", "row", "row", "row"]}
      justifyContent="space-around"
      w={["auto", "auto", "100%", "100%", "100%"]}
    >
      <Card variant="filled" mb={4}>
        <Table w="max-content">
          <Thead>
            <Tr>
              <Th colSpan={2}>Juros Compostos</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1º Ano</Td>
              <Td>R$11.000,00</Td>
            </Tr>
            <Tr>
              <Td>2º Ano</Td>
              <Td>R$12.100,00</Td>
            </Tr>
            <Tr>
              <Td>3º Ano</Td>
              <Td>R$13.310,00</Td>
            </Tr>
            <Tr>
              <Td>4º Ano</Td>
              <Td>R$14.641,00</Td>
            </Tr>
            <Tr>
              <Td>5º Ano</Td>
              <Td>R$16.105,10</Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
      <Card variant="filled" mb={4}>
        <Table w="max-content">
          <Thead>
            <Tr>
              <Th colSpan={2}>Juros Simples</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1º Ano</Td>
              <Td>R$11.000,00</Td>
            </Tr>
            <Tr>
              <Td>2º Ano</Td>
              <Td>R$12.000,00</Td>
            </Tr>
            <Tr>
              <Td>3º Ano</Td>
              <Td>R$13.000,00</Td>
            </Tr>
            <Tr>
              <Td>4º Ano</Td>
              <Td>R$14.000,00</Td>
            </Tr>
            <Tr>
              <Td>5º Ano</Td>
              <Td>R$15.000,00</Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </Flex>
  );
};

export default TabelaComparaJuros;
