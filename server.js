var express = require('express');
var app = express();
// app.get('/', (req, res) => {
//     res.send("Welcome");
// })

var logger = require('morgan');
var cookieParser = require('cookie-parser');

// app.use(express.static(__dirname + "/public"));
// app.use(express.json());
// app.use(express.urlencoded({ exteded: false }));


// app.post("/json", (req, res) => {
//     console.log(req.body);
// });

// app.post("/contact", (req, res) => {
//     console.log(req.body);
// });
app.use(logger('dev'));
app.use(cookieParser());
app.use((req, res, next) => {
    var count = req.cookies.count;
    if (count) {
        res.cookie("count", Number(count) + 1);
    } else {
        res.cookie("count", 1);
    }
    console.log(count);
    // res.cookie("count", 1);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});