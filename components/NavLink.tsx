import { Link, useColorModeValue } from "@chakra-ui/react";
import { NavLinkProps } from "./interfaces";

const NavLink = (props: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={props.link}
    target={props.target}
  >
    {props.children}
  </Link>
);

export default NavLink;
