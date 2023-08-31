import { Flex, Card, Text } from "@chakra-ui/react";

const financasPessoais = () => {
  return (
    <Flex flexDir="column" m={3} alignItems="center">
      <Card p={3} alignItems="center" maxW="1000px">
        <Text fontSize="4xl">Planilha de Finanças Pessoais</Text>
        <Text my={4}>
            Organizar as suas finanças pode não ser a tarefa mais fácil do mundo, por isso eu fiz para te ajudar uma planilha completa e totalmente gratuita
          para te ajudar nessa missão, com ela você vai poder listar todas as suas despesas em um só lugar, separá-las por cartão de crédito, definir suas próprias
          metas de gastos e muito mais!
        </Text>
        <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${www.youtube.com/embed/qkolQyUi_2Q?si=k6qqnLvQhPJEhOd8}`}
        title="YouTube video player"
      ></iframe>
        <Text fontSize="4xl" mt={4}>
          Já organizou suas finanças e mesmo assim não está sobrando para investir?
        </Text>
        <Text my={4}>
            Renda extra é uma ótima maneira de começar a sobrar um dinheiro a mais para seus investimentos, nesse vídeo eu te dou dicas de renda extra
          que eu mesmo já fiz para investir e deu certo, não deixe de conferir!
        </Text>
      </Card>
    </Flex>
  );
};

export default financasPessoais;
