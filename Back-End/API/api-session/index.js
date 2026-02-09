// This is a Node.js + Express server.
// It creates a backend API that listens to requests from browser, Postman, or frontend (React).



// Import Express library
const express = require("express");


//Create Express app (server)
const app = express();


// Middleware: allows server to read JSON data from request body
app.use(express.json())


//Define a route
//GET : Read Data
app.get("/", (req, res) => {

    res.send("Hello World");
});




//POST :- create New Data
app.post("/user", (req,res) => {
    const data = req.body;
    res.json({
        message: "Data Created Successfuly",
        data : data
    });
});



//PUT :- Update WHole Data
app.put("/user/:id", (req,res) => {
    
    const id = req.params.id;
    const data = req.body;

    res.json({
        message : `User ${id} Updated Compleletly`,
        updatedData : data
    });
});


//PATCH :- Update Partial Data
app.patch("/user/:id", (req, res) => {

    const id = req.params.id;
    const data = req.body;

    res.json({
        message : `User ${id} updated Partialy`,
        updatedField : data
    });
});


//DELETE :- remove data
app.delete("/user/:id", (req,res) => {

    const id = req.params.id;

    res.json({
        message : `User ${id} deleted Successfuly`
    });
});



// ================== SERVER ==================
// Port number
const port = 7000;

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
