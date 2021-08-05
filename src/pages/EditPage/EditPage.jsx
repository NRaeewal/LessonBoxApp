import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm'
import {useState, useEffect} from 'react';



function EditPage(props)

{
    const[data, setData]=useState([])

    const lessonShow = props.lessons.map((lesson, idx )=> 

    lesson._id)

    
// console.log(props}

 return (
        <div>
        
        <input type="text" defaultValue={lessonShow}/>


            <Link to='/'>Cancel</Link>

        </div>
    )

}

export default withRouter(EditPage);