import { Box, Center, Container, Heading } from "@chakra-ui/react";

const BaseTemplate = ({ className = null, titleText = null, children }) => {
  return (
    <Box style={{ padding: "20px 0" }} className={className}>
      {titleText && (
        <Container>
          <Heading mb={5}>
            <Center>{titleText}</Center>
          </Heading>
        </Container>
      )}
      <Container maxW="1280px">{children}</Container>
    </Box>
  );
};

export default BaseTemplate;
