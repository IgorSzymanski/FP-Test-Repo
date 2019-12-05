import * as express from 'express'
import * as compression from 'compression'
import * as path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { Schema } from '~application/schema'

const server = new ApolloServer({
	schema: Schema,
	context: (ctx) => ctx,
})

const app = express()

server.applyMiddleware({ app })

app.set('port', process.env.PORT || 3000)
app.set('env', 'development')

app.use(compression())

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 1 }))

export default app
