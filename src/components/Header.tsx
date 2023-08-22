import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Image,
  useColorMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  IconButton,
  Accordion,
  Link,
} from "@chakra-ui/react";
import CustomAccordion from "./CustomAccordion/CustomAccordion";
import Content from "./CustomAccordion/Content";

type Menus = { title: string; pages: { name: string; href: string }[] }[];

const Header = () => {
  const { colorMode } = useColorMode();

  const menus: Menus = [
    {
      title: "Finanças",
      pages: [
        { name: "Calculadora", href: "/" },
        { name: "Opa", href: "/opa" },
        { name: "Pai Rico", href: "/paiRico" },
      ],
    },
    {
      title: "Livros",
      pages: [
        { name: "Pai Rico", href: "/paiRico" },
        { name: "Pai Rico", href: "/paiRico" },
        { name: "Pai Rico", href: "/paiRico" },
      ],
    },
  ];

  return (
    <Flex h="70px" bg="header" alignItems="center" w="100vw">
      <Box display={["box", "box", "none", "none", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            ml={3}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={30} />}
            variant="ghost"
            _hover={{ bg: "hoverButton" }}
          />
          <MenuList>
            <Accordion allowToggle>
              {menus.map((menu) => (
                <CustomAccordion title={menu.title}>
                  {menu.pages.map((page) => (
                    <Content href={page.href}>{page.name}</Content>
                  ))}
                </CustomAccordion>
              ))}
            </Accordion>
          </MenuList>
        </Menu>
      </Box>
      <Image
        src={
          colorMode == "light"
            ? "/logo-transparente-preto.png"
            : "/logo-transparente-branco.png"
        }
        alt="Bruno Valle Logo"
        h="70px"
        mx={3}
      />
      <Box display={["none", "none", "block", "block", "block"]}>
        {menus.map((menu) => (
          <Menu>
            <MenuButton
              ml={1}
              as={Button}
              variant="ghost"
              _hover={{ bgColor: "hoverButton" }}
              rightIcon={<ChevronDownIcon />}
            >
              {menu.title}
            </MenuButton>
            <MenuList>
              {menu.pages.map((page) => (
                <MenuItem>
                  <Link href={page.href}>{page.name}</Link>{" "}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ))}
      </Box>
    </Flex>
  );
};
export default Header;
