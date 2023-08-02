import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ChangeEvent, useState } from "react";

type tableRowInterface = {
  mes: number;
  juros: number;
  totalInvestido: number;
  totalJuros: number;
  totalAcumulado: number;
};

const Index = () => {
  const table: tableRowInterface[] = [];

  const [startingValue, setStartingValue] = useState<number>(0);
  const handleStartingValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setStartingValue(parseFloat(e.target.value));

  const [monthlyValue, setMonthlyValue] = useState<number>(0);
  const handleMonthlyValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMonthlyValue(parseFloat(e.target.value));

  const [interest, setInterest] = useState<number>(0);
  const handleInterestChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInterest(parseFloat(e.target.value));

  const [period, setPeriod] = useState<number>(0);
  const handlePeriodChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPeriod(parseFloat(e.target.value));

  const [totalFinal, setTotalFinal] = useState<string>("R$ 0.00");
  const [totalInvestido, setTotalInvestido] = useState<string>("R$ 0.00");
  const [totalInterest, setTotalInterest] = useState<string>("R$ 0.00");

  const onSubmit = () => {
    table.length = 0;

    table.push({
      mes: 0,
      juros: 0,
      totalInvestido: startingValue,
      totalJuros: 0,
      totalAcumulado: startingValue,
    });

    for (let i = 0; i < period; i++) {
      const row = table[table.length - 1];

      const juros = row.totalAcumulado * interest * 0.01;
      const totalInvestido = row.totalInvestido + monthlyValue;
      const totalJuros = row.totalJuros + juros;
      const totalAcumulado = totalInvestido + totalJuros;
      table.push({
        mes: i + 1,
        juros,
        totalInvestido,
        totalJuros,
        totalAcumulado,
      });
    }

    setTotalFinal("R$ " + table[table.length - 1].totalAcumulado.toFixed(2));
    setTotalInvestido(
      "R$ " + table[table.length - 1].totalInvestido.toFixed(2)
    );
    setTotalInterest("R$ " + table[table.length - 1].totalJuros.toFixed(2));
  };

  return (
    <Flex flexDir="column" alignItems={"center"} my={20}>
      <Text fontSize="2xl" mb={5}>
        Simulador de Juros Compostos
      </Text>
      <Flex className="calculadora" flexDir="column" mb={4}>
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Valor inicial</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="R$" />
            <Input type="number" onChange={handleStartingValueChange} />
          </InputGroup>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Valor mensal</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="R$" />
            <Input type="number" onChange={handleMonthlyValueChange} />
          </InputGroup>
        </Flex>
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Taxa de juros</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <InputLeftAddon children="%" />
            <InputRightElement w="30">
              <Select defaultValue={1} borderLeftRadius={0}>
                <option value="1">Mensal</option>
                <option value="2">Anual</option>
              </Select>
            </InputRightElement>
            <Input type="number" onChange={handleInterestChange} />
          </InputGroup>
          <Flex
            w="100px"
            justifyContent={["start", "start", "start", "end", "end"]}
            mr={2}
            alignItems="center"
          >
            <Text>Período</Text>
          </Flex>
          <InputGroup w={300} mb={2}>
            <Input type="number" onChange={handlePeriodChange} />
            <InputRightElement w="30">
              <Select defaultValue={1} borderLeftRadius={0}>
                <option value="1">Mes(es)</option>
                <option value="2">Ano(s)</option>
              </Select>
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Button variant="outline" w={20} onClick={onSubmit}>
          Calcular
        </Button>
      </Flex>
      <Flex flexDir="column">
        <Text>Resultado</Text>
        <Flex flexDir={["column", "column", "row", "row"]}>
          <Flex flexDir="column" border="1px" borderRadius="md" p="3" w={200}>
            <Text>Valor total final</Text>
            <Text fontSize="2xl">{totalFinal}</Text>
          </Flex>
          <Flex
            flexDir="column"
            border="1px"
            borderRadius="md"
            p="3"
            my={[4, 4, 0, 0]}
            mx={[0, 0, 4, 4]}
            w={200}
          >
            <Text>Valor total investido</Text>
            <Text fontSize="2xl">{totalInvestido}</Text>
          </Flex>
          <Flex flexDir="column" border="1px" borderRadius="md" p="3" w={200}>
            <Text>Total em juros</Text>
            <Text fontSize="2xl">{totalInterest}</Text>
          </Flex>
        </Flex>
      </Flex>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Index;
