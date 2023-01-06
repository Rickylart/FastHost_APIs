
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

//*******swagger part */
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";

const app = express();

//******swagger part */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fasthost Express API with Swagger",
      version: "1.0.0",
      description:
        "This swagger contains the documentations of all free Fasthost APIs",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Francis Rick Lartey",
        url: "https://fasthosttech.com",
        email: "info@fasthosttech.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        url: "http://localhost:1000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  // swaggerUi.setup(specs),
  swaggerUi.setup(specs, { explorer: true })
);

export default app;
