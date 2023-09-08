import { Image, Link } from "@chakra-ui/react"

const LinkAmazon = ({link}) => {
    return (
        <Link href={link} target="_blank"><Image m={2} boxShadow="2xl" boxSize={20} fit="cover" src="/amazon.png"/></Link>
    )
}

export default LinkAmazon;