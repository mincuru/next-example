import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { NextResponse } from "next/server";

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// export default startServerAndCreateNextHandler(server);
const handler = startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  // return NextResponse.json({ title: "hello GraphQL!" });
  return handler(request);
}

export async function POST(request: Request) {
  // return NextResponse.json({ title: "hello GraphQL!" });
  return handler(request);
}
