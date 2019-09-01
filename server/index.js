const express = require("express");
const app = express();
const serversController = require("./controllers/serversController");

app.use(express.json());

app.get("/api/servers", serversController.getServers);
app.post("/api/server/add", serversController.addServers);
app.delete("/api/servers/delete", serversController.deleteServers);

app.listen(5050, () => {
    console.log("listening on port 5050")
})

