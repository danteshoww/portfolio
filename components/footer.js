import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Arnon Farias. All Rights Reserved.
      Inspired in <a href="https://www.craftz.dog/">Takuya Matsuyama</a>
    </Box>
  );
};

export default Footer;
