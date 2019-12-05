import { schemaComposer, SchemaComposer as SchemaComposerContructor } from 'graphql-compose'
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'

export const SchemaComposer = <SchemaComposerContructor<ExpressContext>>schemaComposer
