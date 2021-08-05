import { useState } from 'react';
import {Link} from 'react-router-dom';


const CreateForm =() => {

const [name, setName] = useState('');
const [subject, setSubject] = useState('');
const [grade, setGrade] = useState('');
const [materials, setMaterials] = useState('');
const [time, setTime] = useState();
const [information, setInformation] = useState('');
const [links, setLinks] = useState('');
const [attachments, setAttachments] = useState('');




const handleSubmit = (e) => {
e.preventDefault();
const lessonplan = {name, subject, grade, materials, time, information, links, attachments};

fetch('/api/lessons/', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(lessonplan)
}
).then(() => console.log(lessonplan))
}


    return(
        <div>            
        <header><h2>Create a Lesson Plan</h2></header><br></br>

        <form onSubmit= {handleSubmit}>
            Name: <input type="text" placeholder="Name" value={name} name="name" onChange={(e)=> setName(e.target.value)}/><br></br>
                       
            <h5>Select a Subject</h5>
            <input type="radio" id='math' value='Math' name='subject' onChange={(e)=> setSubject(e.target.value)}/> Math <br></br>
            <input type="radio" id='math' value='LA' name='subject' onChange={(e)=> setSubject(e.target.value)}/> Language Arts <br></br>
            <input type="radio" id='math' value='SS' name='subject' onChange={(e)=> setSubject(e.target.value)}/> Social Studies  <br></br>
            <input type="radio" id='math' value='Science' name='subject' onChange={(e)=> setSubject(e.target.value)}/> Science <br></br>
            <input type="radio" id='math' value='Other' name='subject' onChange={(e)=> setSubject(e.target.value)}/> Other <br></br>

            <h5>Select a Grade</h5>
            
            <select name='subject' value='Kindergarten' onChange={(e)=> setGrade(e.target.value)}>
            <option value="KG">Kindergarten</option>
            <option value='Grade 1'>Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option> 


             </select><br></br>

            Materials: <input type="text" placeholder="Materials" value={materials} name='materials' onChange={(e) => setMaterials(e.target.value)}/> <br></br>
            Time: <input type="text" placeholder="Time" value={time} name='time' onChange={(e) => setTime(e.target.value)}/><br></br>
            Lesson Information: <input type="text" placeholder="Information" value={information} name='information' onChange={(e) => setInformation(e.target.value)}/><br></br>
            Helpful Links: <input type="text" placeholder="Links" value={links} name='links' onChange={(e) => setLinks(e.target.value)}/><br></br>
            <input type="text" placeholder="Attachments" value={attachments} name='attachments' onChange={(e) => setAttachments(e.target.value)}/><br></br>

            <button className="btn btn-default" disabled=''>Submit Your Plan</button>

        </form>
        
        </div>


    )


};

export default CreateForm;