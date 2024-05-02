import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import articlesRoute from "./routes/articlesRoute.js";
import adminsRoute from "./routes/adminsRoute.js";
import sponserRoute from "./routes/sponserRoute.js";
import MemberRoute from "./routes/memberRoute.js";

import { mongoDBURL, PORT } from "./config.js";

// run the app with express
const app = express();

// return the body in json format
app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/", articlesRoute, adminsRoute, sponserRoute, MemberRoute);

mongoose
  // connect to the database
  .connect(mongoDBURL)
  // hadle the promise
  .then(() => {
    console.log("App connected to database");
    // if its connected successuflly, make the app open in the port
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  // if not handle the error
  .catch((err) => {
    console.log(err);
  });

// get the data
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To BlueTopia's Database ");
});
