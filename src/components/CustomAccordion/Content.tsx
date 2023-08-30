import { AccordionPanel, Link } from "@chakra-ui/react";

const Content = ({ href, children }) => {
  return (
    <AccordionPanel>
      <Link href={href}>{children}</Link>
    </AccordionPanel>
  );
};

export default Content;
