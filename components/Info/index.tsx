import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import GitCard from "../Card";
import RepoCard from "../Repo";
import { CardProps } from "../interfaces";
import { Flex, SimpleGrid } from "@chakra-ui/react";

const Info = ({ username }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [found, setFound] = useState(false);

  async function getUser(username: any) {
    try {
      setFound(true);
      const data = await fetch(`https://api.github.com/users/${username}`);
      data.json().then((response) => setUser(response));
      const reposData = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      reposData.json().then((response) => {
        try {
          response.sort(
            (a: { created_at: number }, b: { created_at: number }) => {
              if (a.created_at < b.created_at) {
                return 1;
              }
              if (a.created_at > b.created_at) {
                return -1;
              }
              return 0;
            }
          );
          setRepos(response.slice(0, 30));
        } catch (error) {
          swal("User not found");
          setFound(false);
        }
      });
    } catch (error) {
      swal("User not found");
    }
  }
  const userInfo = (user: CardProps) => {
    return (
      <>
        <GitCard
          imgBack={user.imgBack}
          avatar_url={user.avatar_url}
          login={user.login}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
          html_url={user.html_url}
          public_repos={user.public_repos}
          blog={user.blog}
        />
        <SimpleGrid minChildWidth={"300px"} spacing={"20px"} margin={4}>
          {repos.map((e) => {
            return (
              <RepoCard
                key={e.id}
                name={e.name}
                html_url={e.html_url}
                description={e.description}
                homepage={e.homepage}
                language={e.language}
                stargazers_count={e.stargazers_count}
              />
            );
          })}
        </SimpleGrid>
      </>
    );
  };
  useEffect(() => {
    getUser(username);
  }, [username]);

  return <>{user !== {} && found === true ? userInfo(user) : null}</>;
};

export default Info;
