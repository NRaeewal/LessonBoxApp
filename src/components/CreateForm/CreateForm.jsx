import { useState } from 'react';


const CreateForm =() => {

const [name, setName] = useState('hello');

const handleSubmit = (e) => {
e.preventDefault();
const lessonplan = {name};
fetch('/api/lessons/', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(lessonplan)
}
).then(() => console.log('new lessonplan'))
}


    return(
        <div>            
        <header><h2>Create a Lesson Plan</h2></header><br></br>

        <form onSubmit= {handleSubmit}>
            Name: <input type="text" placeholder="Name" value={name} name="name" onChange={(e)=> setName(e.target.value)}/><br></br>
                       
            {/* <h5>Select a Subject</h5>
            <input type="radio" id='math' value='Math' name='grade' onChange=''/> Math <br></br>
            <input type="radio" id='math' value='Math' name='grade' onChange=''/> Language Arts <br></br>
            <input type="radio" id='math' value='Math' name='grade' onChange=''/> Social Studies  <br></br>
            <input type="radio" id='math' value='Math' name='grade' onChange=''/> Science <br></br>
            <input type="radio" id='math' value='Math' name='grade' onChange=''/> Other <br></br>

            <h5>Select a Grade</h5>
            
            <select name='subject' value='' onChange=''>
            <option value="this.state">Kindergarten</option>
            <option value=''>Grade 1</option>
            <option value="">Grade 2</option>
            <option value="">Grade 3</option>
            <option value="">Grade 4</option>
            <option value="">Grade 5</option>
            <option value="">Grade 6</option>
            <option value="">Grade 7</option>
            <option value="">Grade 8</option>
            <option value="">Grade 9</option>
            <option value="">Grade 10</option>
            <option value="">Grade 11</option>
            <option value="">Grade 12</option> 


             </select><br></br>

            Materials: <input type="text" placeholder="Materials" value='' name='materials' onChange=''/> <br></br>
            Time: <input type="text" placeholder="Time" value='' name='time' onChange=''/><br></br>
            Lesson Information: <input type="text" placeholder="Information" value='' name='information' onChange=''/><br></br>
            Helpful Links: <input type="text" placeholder="Links" value='' name='links' onChange=''/><br></br>
            <input type="text" placeholder="Attachments" value='' name='attachments' onChange=''/><br></br> */}


            <button className="btn btn-default" disabled=''>Submit Your Plan</button>

        </form>
        
        </div>


    )


};

export default CreateForm;