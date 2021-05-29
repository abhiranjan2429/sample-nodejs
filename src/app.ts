import express from 'express';
 const app = express();
// import {config} from './config/config'

 app.use(express.json());

app.use((req, res, next)=> {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    res.header("Access-Control-Allow-Headers", " Content-Type");
    res.setHeader("Content-Type", "application/json");
    res.removeHeader("X-Powered-By");
    next();
})
// routes
app.get('/',async (req,res)=>{
    res.status(200).type('html');
    res.send(`<h1>Welcome to node app</h1>`)

})


export default app;