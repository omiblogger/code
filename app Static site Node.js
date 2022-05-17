// npm install express
// node app.js

const express = require("express")
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    
    res.sendFile(`${__dirname}/index.html`, (err)=>{
        if(err){
            console.log(err)
            res.end(err.message)
        }
    });
});

app.listen(8000, "localhost", () => {
    console.log("Server is running on port 8000")
})




















