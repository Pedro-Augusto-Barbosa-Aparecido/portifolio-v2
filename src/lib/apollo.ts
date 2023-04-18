import { ApolloClient, InMemoryCache } from "@apollo/client";

let client: ApolloClient<any> | null = null;
const isServerSide = typeof window === "undefined";

export const getClient = () => {
  if (!client || isServerSide) {
    client = new ApolloClient({
      uri: "https://api-sa-east-1.hygraph.com/v2/clgjtcszo2q6j01ujex5b37e3/master",
      cache: new InMemoryCache(),
    });
  }

  return client;
};
