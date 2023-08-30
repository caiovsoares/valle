import { Box } from "@chakra-ui/react";

const Youtube = ({ link }: { link: string }) => {
  return (
    <Box
      width={["304px", "304px", "800px"]}
      height={["171px", "171px", "450px"]}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${link}`}
        title="YouTube video player"
      ></iframe>
    </Box>
  );
};

export default Youtube;
