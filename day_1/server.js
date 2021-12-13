const express = require("express")

const connect = require("./src/config/db")

const userController = require("./src/controllers/user.controller");
const movieController = require("./src/controllers/movie.controller");
const theatreController = require("./src/controllers/theatre.controller");
const screenController = require("./src/controllers/screen.controller");
const showController = require("./src/controllers/show.controller");
const seatController = require("./src/controllers/seat.controller");


const app = express();
app.use(express.json());

const { register, login } = require("./src/controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);
app.use("/movies", movieController);
app.use("/theatre", theatreController);
app.use("/screen", screenController);
app.use("/shows", showController);
app.use("/seats", seatController);



const start = async ()=>{
    await connect();
    app.listen(2121,()=>{
        console.log("Listening to port 2121");
    })
};

module.exports=start;