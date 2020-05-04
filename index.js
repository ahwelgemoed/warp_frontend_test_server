const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQl/schemas');
const resolvers = require('./graphQl/resolvers');
const allRoutes = require('./rest/routes');
const port = process.env.PORT || 4000;
const app = express();
const swaggerConfig = require('./helpers/swaggerConfig');
const expressSwagger = require('express-swagger-generator')(app);
app.use(cors());
app.use(bodyParser.json());
app.use('/v1', allRoutes);
app.use(express.static('/public'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
expressSwagger(swaggerConfig);
app.listen({ port }, () => {
  console.warn(`Swagger On http://localhost:${port}/api-docs#/`);
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
