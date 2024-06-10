import { Container, Text, VStack, Box, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
      <VStack spacing={4} flex="1" justifyContent="center">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <Box as="footer" width="100%" py={4} borderTop="1px" borderColor="gray.200">
        <VStack spacing={2}>
          <HStack spacing={4}>
            <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
            <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound />
          </HStack>
          <Text fontSize="sm">© {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
