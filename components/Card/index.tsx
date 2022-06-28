import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CardProps } from "../interfaces";
import NavLink from "../NavLink";

export default function GitCard(props: CardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            // props.imgBack
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={props.avatar_url}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {props.login}
            </Heading>
            <Text color={"gray.500"} align={"center"}>
              {props.bio}
            </Text>
          </Stack>
          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{props.followers}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{props.following}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Following
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={0} marginTop={4} align={"center"}>
            <Text fontWeight={600}>{props.public_repos}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Public Repositories
            </Text>
          </Stack>
          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            <NavLink link={props.html_url} target="_blank">
              Go to profile
            </NavLink>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
