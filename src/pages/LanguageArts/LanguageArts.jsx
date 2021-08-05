import React, {Component, useState, Link} from 'react'; 
import NavBar from '../../components/NavBar/NavBar';
import lessonService from '../../utils/lessonService';
import Header from '../../components/Header/Header';
import { NavItem } from 'react-bootstrap';


class LanguagePage extends Component {

    // do I need this here?
        async componentDidMount() {
        const lessons = await lessonService.index()
        this.props.handleUpdateLessons(lessons)
        }

    render() {
    
        const lessonShow = this.props.lessons.flatMap((lesson, idx )=> 
          
        (lesson.subject === 'LA') ? 

        <tr>
        <td>{lesson.name} </td>
        <td>{lesson.grade}</td>
        <td>{lesson.materials}</td>
        <td>{lesson.time}</td>
        <td>{lesson.information}</td>
        <td>{lesson.links}</td>
        <td>{lesson.attachments}</td>
        <td><button onClick={()=>this.props.handleDeleteLessons(lesson._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg></button></td>

        {/* <td><Link to={'update/'+lesson._id}><button>Edit</button></Link></td> */}
        </tr>
        :

        []

        ) 
    

    return (    
            <div>  
                <Header/>           
                <NavBar 
                user={this.props.user}
                handleLogout={this.props.handleLogout}/>
                <h2>Language Arts Lesson Plans</h2>

              

                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col">Lesson Name</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Materials</th>
                    <th scope="col">Time</th>
                    <th scope="col">Information</th>
                    <th scope="col">Links</th>
                    <th scope="col">Attachments</th>
                    <th scope="col">Action</th>

                    </tr>

                </thead>
                <tbody>
                        {lessonShow}
                </tbody>

                </table>

                </div>
                 );
                    }             
    }
    
    export default LanguagePage;