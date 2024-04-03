const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware 
app.use(bodyParser.json());
app.use(cors());

//routes
const userRoutes = require('./routes/user-routes');
app.use('/api/users', userRoutes);

//connect to mongodb
mongoose.connect('mongodb+srv://sam:sam123@cluster0.geehfle.mongodb.net/team-maker?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    app.listen(PORT);
})
.catch(err =>{
    console.log(err);
});

