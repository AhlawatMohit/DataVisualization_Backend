import dotenv  from "dotenv";
import { app } from "./app.js";
import connectDB from "./src/DataBase/DB.js";
import { allLikelihood, allSector, allTopic, getAllData } from "./src/Controllers/data.controllers.js";

dotenv.config({
    path: './.env'
})


connectDB()

     // ROUTES
     app.get("/", (req, res) => {
        res.send("Server is up and Running")
    });

    app.get("/allData", getAllData);

    app.get("/topic", allTopic);
    app.get("/sector", allSector);
    app.use("/likelihood", allLikelihood);



             // SERVER
             
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
} );
