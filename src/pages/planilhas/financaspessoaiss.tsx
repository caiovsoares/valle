import { Flex, Card, Text } from "@chakra-ui/react";

const financasPessoais = () => {
  return (
    <Flex flexDir="column" m={3} alignItems="center">
      <Card p={3} alignItems="center" maxW="1000px">
        <Text fontSize="4xl">Planilha de Finanças Pessoais</Text>
        <Text my={4}>
          Organizar as suas finanças as vezes pode não ser a tarefa mais fácil do mundo, mas nem tudo está perdido.
          Eu fiz para te ajudar uma planilha com todas as funcionalidades que você precisa para descobrir onde está o erro e se livrar de vez das dívidas!
        </Text>
        <Text fontSize="4xl" mt={4}>
          Já organizou suas finanças e mesmo assim não está sobrando para investir?
        </Text>
        <Text my={4}>
          Não deixe de conferir este vídeo onde eu falo sobre como ganhar renda extra!
        </Text>
      </Card>
    </Flex>
  );
};

export default financasPessoais;
