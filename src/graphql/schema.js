import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from '@apollo/client';

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    type: String         # рівень складності (1-5)
    status: Boolean!
    created_at: String
    updated_at: String
    deleted_at: String
  }

  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
  }

  type Mutation {
    addTask(
      title: String!
      description: String
      type: String
    ): Task

    updateTask(
      id: ID!
      title: String
      description: String
      type: String
      status: Boolean
    ): Task

    softDeleteTask(id: ID!): Task
    restoreTask(id: ID!): Task
    deleteTask(id: ID!): Boolean
  }
`;

export const schema = makeExecutableSchema({ typeDefs });
