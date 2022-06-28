import React, { useState } from "react";
import Info from "../Info";
import { Form } from "./styles";
import { Button, Center, Input } from "@chakra-ui/react";

const Search: React.FC = () => {
  const [username, setUsername] = useState("");
  const [info, setInfo] = useState({
    element: <div style={{ display: "none" }} />,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInfo({ element: <Info username={username} /> });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Center py={6} marginLeft={8} marginRight={8} marginTop={4}>
          <Input
            type="text"
            placeholder="Github Username"
            onChange={(e: any) => setUsername(e.target.value)}
            required={true}
          />
          <Button type="submit">Search</Button>
        </Center>
      </form>
      {info.element}
    </>
  );
};

export default Search;
