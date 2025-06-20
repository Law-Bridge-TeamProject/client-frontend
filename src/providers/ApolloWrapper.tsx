"use client";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode } from "react";

const httpLink = createHttpLink({
  uri: process.env.BACKEND_URL || "http://localhost:4000/api/graphql",
});

export const ApolloWrapper = ({ children }: { children: ReactNode }) => {
    // const {getToken} = useAuth()
  const authLink = setContext(async(_, { headers }) => {

    // const clerkToken = localStorage.getItem("token");

    return {
      headers: {
        ...headers,
        // authorization: clerkToken ? `Bearer ${clerkToken}` : "",
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}