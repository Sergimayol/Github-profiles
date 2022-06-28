import React, { useState } from "react";
import Info from "../Info";
import { Form, Input, Button } from "./styles";

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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Github Username"
          onChange={(e: any) => setUsername(e.target.value)}
          required={true}
        />
        <Button type="submit">Search</Button>
      </Form>
      {info.element}
    </>
  );
};

export default Search;
