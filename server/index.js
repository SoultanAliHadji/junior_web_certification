//importing important libraries
import express from "express";
import cors from "cors";
import ApplicationRoute from "./routes/ApplicationRoute.js";

//initialitation to use express and cors libraries, to use json form request, and to set ApplicationRoute for REST API routing
const app = express();
app.use(cors());
app.use(express.json());
app.use(ApplicationRoute);

//to bind and listen to the connections on the specified host and port, it gives a message when the server is running and ready to use also
app.listen(5000, () => console.log("Server up and running..."));
