require("dotenv").config()
const io = require("socket.io")(3001, {
    cors: {
        origin: process.env.URL,
        methods: ["GET", "POST"],
    },
});


io.on("connection", (socket) =>{
    // console.log("A user connected.");
    socket.on("message", (msg)=>{
        console.log("message "+msg)
        io.emit("message", msg);
    })
})

