var express = require("express"), 
   
app = express();


const bodyParser = require("body-parser");
var todoRoutes = require('./routes/todos')

app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+ '/views'));
app.use(express.static(__dirname + '/public')); 


app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes); 

app.listen(3000, () => {
    console.log("app is running on 3000");
})