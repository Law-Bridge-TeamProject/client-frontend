"use client";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ReactNode } from "react";
import { useAuth } from "@clerk/nextjs";

const httpLink = createHttpLink({
  uri: process.env.BACKEND_URL || "http://localhost:4000/api/graphql",
});

export const ApolloWrapper = ({ children }: { children: ReactNode }) => {

    const {getToken} = useAuth()

  const authLink = setContext(async(_, { headers }) =>{
    const clerkToken = await getToken();

    return {
      headers: {
        ...headers, 
        Authorization : clerkToken,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}