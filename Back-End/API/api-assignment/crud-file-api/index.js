//import express lib, express -> create API, fs -> read/write data.json file
const express = require("express");
const fs = require("fs");


//create express server
const app = express();


//middle ware : allows reading JSON from request body
app.use(express.json());


//Reads data from data.json and Writes updated data back to file
const readData = () => {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};



//post : Create new Record
app.post("/users", (req, res) => {

    const users = readData();
    console.log(req.body, "payload -------------");
    
    const newUsers = {
        id : Date.now(),
        name : req.body.name,
        email : req.body.email
    };
    console.log(newUsers, "Users ---------------->>>>>>");
    
    users.push(newUsers);
    writeData(users);

    res.status(201).json(newUsers);
});


//GET : Read all record from file
app.get("/", (req, res) => {

    const users = readData();
    res.json(users);
    
});



//PUT : Update Api
app.patch("/users/:id", (req, res) => {

    const users = readData();
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id == id);

    
    if(index == -1) {

        return res.status(404).json({message : "User not found"});
    }

    users[index] = {
        ...users[index],
        // name : req.body.name,
        // email : req.body.email
        ...req.body
    };

    writeData(users);
    res.json(users[index]);

});



//DELETE : Remove record from file
app.delete("/users/:id", (req, res) => {

    const users = readData();
    const id = Number(req.params.id);

    const newUser = users.filter(user => user.id != id);

    if(users.length === newUser.length) {
        return res.status(404).json({message : "User not found"});
    }

    writeData(newUser);
    res.json({message : "User deleted Successfuly"});
});



//start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});