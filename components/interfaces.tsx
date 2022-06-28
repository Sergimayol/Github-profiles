import { ReactNode } from "react";

export interface CardProps {
  imgBack?: string;
  avatar_url?: string;
  bio?: string;
  followers?: number;
  following?: number;
  html_url?: string;
  public_repos?: number;
  login?: string;
}

export interface RepoProps {
  name?: string;
  html_url?: string;
  description?: string;
  homepage?: string;
  language?: string;
  stargazers_count?: number;
}

export interface NavLinkProps {
  children: ReactNode;
  link: string;
  target?: string;
}
