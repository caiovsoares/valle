import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
  Select,
  Image,
  useColorMode,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex h={100} bg="header">
      <Image
        src={
          colorMode == "light"
            ? "/logo-transparente-preto.png"
            : "/logo-transparente-branco.png"
        }
        alt="Bruno Valle Logo"
        h={100}
        ml={5}
      />
    </Flex>
  );
};
export default Header;
