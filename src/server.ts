/* eslint-disable prettier/prettier */
import SwaggerUI from "swagger-ui-express";
import swaggerFile from "swagger.json"

import { app } from ".";

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
