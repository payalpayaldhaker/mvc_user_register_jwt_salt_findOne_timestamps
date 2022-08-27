const express =require('express');
const { registerRoute } = require('./routes/registerRoute');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/api',registerRoute)

let port = process.env.PORT;
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})