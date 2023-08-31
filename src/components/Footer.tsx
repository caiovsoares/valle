import {Flex, Text, Icon, Link, Card} from "@chakra-ui/react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <Flex p={4} bg="header" justifyContent="flex-end" alignItems="center" w="100%">
        <Flex flexDir="column" alignItems="flex-end" mr={2}> 
            <Flex alignItems="center">
                <Text mr={2}>Acompanhe nas redes sociais</Text>
                <Link display="contents" target="_blank" href='https://www.youtube.com/'> 
                    <Icon as={BiLogoYoutube} boxSize={7}/>
                </Link>
                <Link display="contents" target="_blank" href='https://www.instagram.com/'> 
                    <Icon as={BiLogoInstagram} boxSize={6}/>
                </Link>
                <Link display="contents" target="_blank" href='https://www.facebook.com/'> 
                    <Icon as={BiLogoFacebook} boxSize={6}/>
                </Link>
                <Link display="contents" target="_blank" href='https://br.linkedin.com/in/brunomvalle'>
                    <Icon as={BiLogoLinkedin} boxSize={6}/>
                </Link>
            </Flex>
            <Flex mt={2}> 
                <Card bgColor="transparentCard" boxShadow="lg" py={4} px={6}>
                    <Text fontWeight="semibold">E-mail para contato: </Text>
                    <Text>email@email.com</Text>
                </Card>
            </Flex>
        </Flex>
    </Flex>
  );
};
export default Footer;
