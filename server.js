require("dotenv").config();
const app = require("./src/app");
const { port } = require("./config/server.config");

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
