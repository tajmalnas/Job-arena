const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    owner:String,
    company_name:String,
    job_title:String,
    job_description:String,
    job_location:String,
    skills:[String],
    salary:Number,
    emails_of_applicants:[String],
});

const JobModel = mongoose.model('Job',jobSchema);

module.exports = JobModel;