import { Image, Link } from "@chakra-ui/react"

const LinkAmazon = ({link}) => {
    return (
        
        <Link href={link} target="_blank"><Image borderRadius={30} boxShadow="2xl" h={67} w={200} fit="contain" src="/amazon.png"/></Link>
    )
}

export default LinkAmazon;