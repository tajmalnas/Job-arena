import { useState,useEffect } from 'react';
import './JobPost.css';

const JobPost = () => {
    const [companyName, setCompanyName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [skill1,setSkill1] = useState('');
    const [skill2,setSkill2] = useState('');
    const [skill3,setSkill3] = useState('');
    const [skill4,setSkill4] = useState('');
    const [skills, setSkills] = useState([]);
    const [salary, setSalary] = useState('');
    useEffect (()=>{
        setSkills([skill1,skill2,skill3,skill4]);
    },[skill1,skill2,skill3,skill4])
    const PostJob = () =>{
        console.log(skills);
    }
    return (
        <div className="flex flex-col justify-center items-center">
        <div className="job_post_container">
            <div className="heading">Job Post </div>
                <form>
                    <div className="inputBox">
                        <div className="input_label">Company Name</div>
                        <input type="text" value={companyName}  onChange={(e) => setCompanyName(e.target.value)} required="required" />
                    </div>
                    <div className="inputBox">
                    <div className="input_label">Job Role</div>
                        <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} required="required" />
                    </div>
                    <div className="inputBox">
                    <div className="input_label">Location</div>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required="required" />
                    </div>
                    <div className="inputBox">
                    <div className="input_label">Description</div>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required="required" />
                    </div>
                    <div className="inputBox">
                    <div className="input_label">Skills</div>
                        <input type="text" value={skill1} placeholder="skill" onChange={(e) => setSkill1(e.target.value)}  />
                        <input type="text" value={skill2} placeholder="skill" onChange={(e) => setSkill2(e.target.value)}  />
                        <input type="text" value={skill3} placeholder="skill" onChange={(e) => setSkill3(e.target.value)}  />
                        <input type="text" value={skill4} placeholder="skill" onChange={(e) => setSkill4(e.target.value)}  />
                    </div>
                    <div className="inputBox">
                        <div className="input_label">Salary</div>
                        <input type="text" value={salary}  onChange={(e) => setSalary(e.target.value)} required="required" />
                    </div>
                    <input type="submit" value="Post Job" onClick={PostJob} className='post-btn' />
                </form>
        </div>
        </div>

    );
};

export default JobPost;