import server from "./app.js"
import {createServer} from "http";

const serverHttp = createServer(server)
export default serverHttp;