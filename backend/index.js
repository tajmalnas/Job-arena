const express = require('express');
const { mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Job = require('./models/JobPost');

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://tajjuddinmalnas21:EChprB5GosgEq9nD@cluster0.ltqg4no.mongodb.net/?retryWrites=true&w=majority");



app.get('/', (req, res) => {
    res.json('test3');
});


app.post('/register',async (req,res)=>{
    const {name,email,password,contact} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,10),
            contact
        })
        res.json(userDoc);
    }catch(err){
        res.json({
            message:'error',
            err,
        })
    }
})


app.get('/profile', async (req, res) => {
    const {id} = req.body
    const { name, email, _id } = await User.findById(id);
    res.json({ name, email, _id });
});


app.get('/login',async(req,res)=>{
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email });
        if (userDoc && bcrypt.compareSync(password, userDoc.password)){
            res.json(userDoc);
        } else {
          res.status(401).json({ status: 'error', message: 'Invalid email or password' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
      }
})


app.post('/job-post',async(req,res)=>{
    const {owner,company_name,job_title,job_description,job_location,skills,salary} = req.body;
    
    try{
        const jobDoc = await Job.create({
            owner,
            company_name,
            job_title,
            job_description,
            job_location,
            skills,
            salary,
            emails_of_applicants:[]
        })
        res.json(jobDoc);
    }
    catch(err){
        res.json({
            message:'error',
            err,
        })
    }
})


app.get('/job-post',async(req,res)=>{
    try{
        const jobDoc = await Job.find();
        res.json(jobDoc);
    }
    catch(err){
        res.json({
            message:'error',
            err,
        })
    }
})

app.post('/job-apply',async(req,res)=>{
    const {id,applicant_email} = req.body;
    try{
        const jobDoc = await Job.findById(id);
        jobDoc.emails_of_applicants.push(applicant_email);
        await jobDoc.save();
        res.json(jobDoc);
    }
    catch(err){
        res.json({
            message:'error',
            err,
        })
    }
})

app.listen(5001,()=>{
    console.log('server on port 5001');
})
