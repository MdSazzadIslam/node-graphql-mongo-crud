const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql"); //will set up our GraphQL HTTP server.
const authorSchema = require("./schema/authorSchema");
const authorResolver = require("./resolvers/authorResolver");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors());
app.use(logger("dev"));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "/logs/access.log"),
  { flags: "a" }
);
// setup the logger
app.use(logger("combined", { stream: accessLogStream }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: authorSchema,
    rootValue: authorResolver,
    graphiql: true, //graphiql is a web interface where you can send queries and mutations to the API
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
