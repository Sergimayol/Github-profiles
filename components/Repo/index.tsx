import { RepoProps } from "../interfaces";
import { useColorMode, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import NavLink from "../NavLink";

export default function RepoCard(props: RepoProps) {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };
  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
  };
  const homepage =
    props.homepage === "" ? (
      ""
    ) : (
      <Text color={colorSecondary[colorMode]}>
        <NavLink link={props.homepage} target="_blank">
          Homepage
        </NavLink>
      </Text>
    );
  return (
    <Flex
      flexDir="column"
      boxShadow={boxShadowColor[colorMode]}
      borderRadius={5}
      border="2px solid transparent"
      margin={4}
    >
      <Flex p={[5, 15, 25]} flexDir="column" justify="space-between" h="100%">
        <Box>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={2}>
            {props.name}
          </Heading>
          <Box
            h={1}
            w="35%"
            bgColor={"blue.500"}
            transition="background-color .5s ease-in-out"
            mb={4}
          />
          <Text color={colorSecondary[colorMode]}>{props.description}</Text>
          {homepage}
        </Box>
        <Flex justify="space-between" mt={2}>
          <Flex align="center">
            <Box alignItems={"center"}>
              <Text fontSize="sm" color={colorSecondary[colorMode]}>
                <StarIcon /> {props.stargazers_count}
                <NavLink link={props.html_url}>
                  <ExternalLinkIcon />
                </NavLink>
              </Text>
              <Text fontSize="sm" color={colorSecondary[colorMode]}></Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Box w={3} h={3} mr={1} borderRadius="50%" />
            <Text fontSize="sm" color={colorSecondary[colorMode]}>
              {props.language}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
