import { Container, Box, VStack, HStack, Text, Image, Link, IconButton, Divider, Flex, Spacer, Input, Button, useColorModeValue } from "@chakra-ui/react";
import { FaRedditAlien, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("#FF4500", "#FF4500");
  return (
    <Container maxW="container.xl" p={0} bg={bgColor}>
      <Box bg="white" boxShadow="md" p={4}>
        <HStack spacing={4}>
          <FaRedditAlien size="32px" color="brand.primary" />
          <Text fontSize="2xl" fontWeight="bold" color="brand.primary">reddit</Text>
          <Spacer />
          <HStack spacing={4}>
            <Input placeholder="Search" size="md" />
            <IconButton aria-label="Search" icon={<FaSearch />} />
            <IconButton aria-label="Notifications" icon={<FaBell />} />
            <IconButton aria-label="User" icon={<FaUserCircle />} />
          </HStack>
        </HStack>
      </Box>
      <Divider />
      <Flex direction={{ base: "column", md: "row" }} p={4}>
        <Box flex="1" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" boxShadow="md">
              <HStack spacing={4}>
                <Image borderRadius="full" boxSize="40px" src="/images/profile1.png" alt="User 1" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User</Text>
                  <Text fontSize="sm" color="gray.500">Posted by u/user 1 hour ago</Text>
                </VStack>
              </HStack>
              <Text mt={4}>This is a sample post content. It should mimic the style and layout of a typical Reddit post.</Text>
              <HStack mt={4} spacing={4}>
                <Button size="sm" colorScheme="brand.primary">Comment</Button>
                <Button size="sm" colorScheme="brand.primary">Share</Button>
                <Button size="sm" colorScheme="brand.primary">Save</Button>
              </HStack>
            </Box>
            <Box p={4} bg="white" boxShadow="md">
              <HStack spacing={4}>
                <Image borderRadius="full" boxSize="40px" src="/images/profile2.png" alt="User 2" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User</Text>
                  <Text fontSize="sm" color="gray.500">Posted by u/user 2 hours ago</Text>
                </VStack>
              </HStack>
              <Text mt={4}>This is another sample post content. It should mimic the style and layout of a typical Reddit post.</Text>
              <HStack mt={4} spacing={4}>
                <Button size="sm" colorScheme="brand.primary">Comment</Button>
                <Button size="sm" colorScheme="brand.primary">Share</Button>
                <Button size="sm" colorScheme="brand.primary">Save</Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
        <Box w={{ base: "100%", md: "300px" }} p={4}>
          <Box bg="white" boxShadow="md" p={4}>
            <Text fontWeight="bold" mb={2}>About Community</Text>
            <Text fontSize="sm">This is a sample community description. It should provide information about the community.</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;