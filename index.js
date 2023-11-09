//middlewares to convert js to jsonimort json server library in index.js
const jsonServer = require('json-server')

//create server using json-server library
const videoPlayerServer = jsonServer.create()

//create a path to db.json file
const router = jsonServer.router('db.json')

//middlewares is used to convert js to json
const midware =jsonServer.defaults()

//connect/use middleware and router in server
videoPlayerServer.use(midware)
videoPlayerServer.use(router)

//setup port for the server
const port = 8000 || process.env.PORT

//to listen server  for resolving request
videoPlayerServer.listen(port,()=>{
    console.log(`VideoPlayerServer started at ${port} and ready to fetch request`);
})