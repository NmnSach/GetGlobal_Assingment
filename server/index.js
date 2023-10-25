const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/getglobal');
    console.log('Connected to MongoDB');
}

const emailSchema = new mongoose.Schema({
    email: String
});

const Email = mongoose.model('Email', emailSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async (req, res) => {

    let email = new Email();
    email.email = req.body.email;

    const doc = await email.save();

    console.log(doc);
    res.json(doc);
});

server.listen(8080, ()=>{
    console.log('Server is running...');
})
