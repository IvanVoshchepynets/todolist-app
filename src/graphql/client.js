import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { schema } from './schema';
import { mocks } from './mocks';

const mockedSchema = addMocksToSchema({ schema, mocks });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: mockedSchema }),
});
