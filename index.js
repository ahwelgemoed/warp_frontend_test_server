const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQL/schemas');
const resolvers = require('./graphQL/resolvers');
const allRoutes = require('./rest/routes');
const port = process.env.PORT || 4000;
const app = express();
const swaggerConfig = require('./helpers/swaggerConfig');
const expressSwagger = require('express-swagger-generator')(app);
app.use(cors());
app.use(bodyParser.json());
app.use(`/public`, express.static(path.join(__dirname, './public')));
app.use('/v1', allRoutes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });
expressSwagger(swaggerConfig);
app.listen({ port }, () => {
  console.warn(`Swagger On http://localhost:${port}/api-docs#/`);
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
