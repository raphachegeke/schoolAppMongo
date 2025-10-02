// importing express and mongo 
const express = require('express'); //this is the server
const mongoose = require('mongoose'); // this is mongodb

// initialize the app 
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/schooldb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to mongodb"))
    .catch(err => console.error("Connection Failed"));

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true } // define name field as a string
});

const Student = mongoose.model('Student', studentSchema);
Student.create({name: "rapha"})


app.listen(3000, () => {
    console.log('Sever is running on port http://localhost:3000')
})